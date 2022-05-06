import { useClass } from '../../contexts/ClassContext'
import { useStudyContent } from '../../hooks/useStudyContent'

import styles from './styles.module.css'
import { StudyListContentType } from '../../enums/study-list-content-type'

import TextContent from './text-content'
import PdfContent from './pdf-content'
import VideoContent from './video-content'
import ExerciseContent from './exercise-content'

import { IExercice, IPdf, IText, IVideo } from '../../models'

const StudyContent: React.FC = () => {
  const { currentStudy } = useClass()
  const { data, title, isLoading } = useStudyContent({
    slug: currentStudy?.slug ?? null
  })

  const RESOLVE_CONTENT = {
    [StudyListContentType.TEXT]: (result: IText) => (
      <TextContent result={result} />
    ),
    [StudyListContentType.PDF]: (result: IPdf) => (
      <PdfContent result={result} />
    ),
    [StudyListContentType.VIDEO]: (result: IVideo) => (
      <VideoContent result={result} />
    ),
    [StudyListContentType.EXERCISE]: (result: IExercice) => (
      <ExerciseContent result={result} />
    )
  }

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.content}>
          <h1 className={styles.h1}>{title}</h1>
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
