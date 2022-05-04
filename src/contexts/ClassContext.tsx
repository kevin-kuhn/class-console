import { createContext, useContext } from 'react'

interface ContextProps {
}

const ClassContext = createContext({} as ContextProps)

interface Props {
  children?: React.ReactNode
}

export const ClassProvider: React.FC<Props> = ({ children }) => {
  return (
    <ClassContext.Provider value={{}}>
      {children}
    </ClassContext.Provider>
  )
}

export const useClass = () => useContext(ClassContext)

export default ClassContext
