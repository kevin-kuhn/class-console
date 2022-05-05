import { createContext, useContext } from 'react'
import useSWR from 'swr'


import { IMeta, IPrimaryChildren, IResponse } from '../models'

import { useLocalStorage } from '../hooks/useLocalStorage'

interface ContextProps {
  currentStudy: IPrimaryChildren | null
  meta: IMeta | null
  studyList: IPrimaryChildren[]
  isStudyDone: (title: string) => void
  handleOnDoneStudy: (title: string) => void
  handleCurrentStudy: (title: string) => void
}

const ClassContext = createContext({} as ContextProps)

interface Props {
  pageId: string
  children?: React.ReactNode
}

export const ClassProvider: React.FC<Props> = ({ children, pageId }) => {
  const { data } = useSWR<IResponse>(['desafio-mesalva-web', pageId])
  const dataChildren = (data?.result.children as IPrimaryChildren[]) ?? []

  const [currentStudy, setCurrentStudy] =
    useLocalStorage<IPrimaryChildren | null>('currentStudy', null)
  const [doneStudies, setDoneStudies] = useLocalStorage<string[]>(
    'doneStudies',
    []
  )

  const handleCurrentStudy = (title: string) => {
    setCurrentStudy(dataChildren.find(study => study.title === title) ?? null)
  }

  const handleOnDoneStudy = (title: string) => {
    setDoneStudies([...doneStudies.filter(study => study !== title), title])
  }

  const isStudyDone = (title: string) => {
    return doneStudies.includes(title)
  }

  return (
    <ClassContext.Provider
      value={{
        meta: data?.meta ?? null,
        currentStudy,
        studyList: dataChildren,
        handleCurrentStudy,
        handleOnDoneStudy,
        isStudyDone
      }}
    >
      {children}
    </ClassContext.Provider>
  )
}

export const useClass = () => useContext(ClassContext)

export default ClassContext
