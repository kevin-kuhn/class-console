import { useEffect, useState } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (x: T) => void] {
  const getInitialState = () => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  }

  const [storedValue, setStoredValue] = useState(initialValue)

  useEffect(() => {
    setStoredValue(getInitialState())
  }, [])

  const setValue = (value: T): void => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {}
  }

  return [storedValue, setValue]
}
