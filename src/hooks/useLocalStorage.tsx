import { useState } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (x: T) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (window) {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
      }
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: T): void => {
    try {
      if (window) {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value
        setStoredValue(valueToStore)
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {}
  }

  return [storedValue, setValue]
}
