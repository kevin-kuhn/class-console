import { useClass } from '../../contexts/ClassContext'
import { useStudyContent } from '../../hooks/useStudyContent'

import styles from './styles.module.css'
import { StudyListContentType } from '../../enums/study-list-content-type'

import TextContent from './text-content'
import PdfContent from './pdf-content'
import VideoContent from './video-content'
import ExerciseContent from './exercise-content'

import { IExercice, IPdf, IPrimaryChildren, IText, IVideo } from '../../models'

import { Loader } from '../icons'
import { useEffect } from 'react'

interface Props {
  studyItemDefault: IPrimaryChildren
}

const StudyContent: React.FC<Props> = ({ studyItemDefault }) => {
  const { currentStudy, handleOnDoneStudy } = useClass()
  const { data, title, studyType, isLoading, studyDescription } =
    useStudyContent({
      slug: currentStudy?.slug ?? studyItemDefault.slug
    })

  useEffect(() => {
    studyType === StudyListContentType.TEXT && handleOnDoneStudy(title)
  }, [studyType])

  const handleDoneStudy = () => {
    handleOnDoneStudy(title)
  }

  const GLOBAL_PROPS = {
    handleOnDoneStudy: handleDoneStudy
  }

  const RESOLVE_CONTENT = {
    [StudyListContentType.TEXT]: (result: IText) => (
      <TextContent result={result} {...GLOBAL_PROPS} />
    ),
    [StudyListContentType.PDF]: (result: IPdf) => (
      <PdfContent result={result} {...GLOBAL_PROPS} />
    ),
    [StudyListContentType.VIDEO]: (result: IVideo) => (
      <VideoContent result={result} {...GLOBAL_PROPS} />
    ),
    [StudyListContentType.EXERCISE]: (result: IExercice) => (
      <ExerciseContent result={result} title={title} {...GLOBAL_PROPS} />
    )
  }

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.content}>
          <h1 className={styles.h1}>{title}</h1>
          <h2 className={styles.h2}>{studyDescription}</h2>
          <ul className={styles.ul}>
            {data.map((item, index) => (
              <li key={index}>
                {(RESOLVE_CONTENT as any)[item.type](item.data) ?? null}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default StudyContent
