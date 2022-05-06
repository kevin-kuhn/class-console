import { createContext, useContext } from 'react'
import useSWR from 'swr'

import { IMeta, IPrimaryChildren, IResponse } from '../models'

import { useLocalStorage } from '../hooks/useLocalStorage'

interface IClassExercise {
  title: string
  answare: string
}

interface ContextProps {
  currentStudy: IPrimaryChildren | null
  meta: IMeta | null
  studyList: IPrimaryChildren[]
  getDoneExercise: (title: string) => IClassExercise | null
  isExerciseDone: (title: string) => boolean
  isStudyDone: (title: string) => boolean
  handleOnDoneStudy: (title: string) => void
  handleCurrentStudy: (title: string) => void
  handleOnDoneExercise: (title: string, answare: string | null) => void
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
  const [doneExercises, setDoneExercises] = useLocalStorage<IClassExercise[]>(
    'doneExercises',
    []
  )

  const handleCurrentStudy = (title: string) => {
    setCurrentStudy(dataChildren.find(study => study.title === title) ?? null)
  }

  const handleOnDoneStudy = (title: string) => {
    setDoneStudies([...doneStudies.filter(study => study !== title), title])
  }

  const handleOnDoneExercise = (title: string, answare: string | null) => {
    answare &&
      setDoneExercises([
        ...doneExercises.filter(exercise => exercise.title !== title),
        {
          title,
          answare
        }
      ])
  }

  const isStudyDone = (title: string) => {
    return doneStudies.includes(title)
  }

  const isExerciseDone = (title: string) => {
    return doneExercises.some(exercise => exercise.title === title)
  }

  const getDoneExercise = (title: string) => {
    return doneExercises.find(exercise => exercise.title === title) ?? null
  }

  return (
    <ClassContext.Provider
      value={{
        meta: data?.meta ?? null,
        currentStudy,
        studyList: dataChildren,
        getDoneExercise,
        isExerciseDone,
        handleOnDoneExercise,
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
