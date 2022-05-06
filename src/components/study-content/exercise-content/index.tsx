import { useEffect, useState } from 'react'

import { IExercice } from '../../../models'

import DOMPurify from 'dompurify'

import styles from './styles.module.css'

import { useClass } from '../../../contexts/ClassContext'

interface Props {
  result: IExercice
  title: string
  handleOnDoneStudy: () => void
}

const ExerciseContent: React.FC<Props> = ({
  result,
  title,
  handleOnDoneStudy
}) => {
  const { isExerciseDone, handleOnDoneExercise, getDoneExercise } = useClass()

  const [seeCorrection, setSeeCorrection] = useState(false)
  const [choosenValue, setChoosenValue] = useState(
    getDoneExercise(title)?.answare ?? null
  )

  useEffect(() => {
    setChoosenValue(getDoneExercise(title)?.answare ?? null)
  }, [title])

  const handleButtonClick = () => {
    if (!isExerciseDone(title)) {
      handleOnDoneStudy()
      handleOnDoneExercise(title, choosenValue)
      return
    }

    setSeeCorrection(true)
  }

  const handleClassName = (isCorrect: boolean) => {
    if (seeCorrection) {
      return isCorrect ? styles.correct : styles.incorrect
    }

    return ''
  }

  return (
    <div className={styles.wrapper}>
      <span
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(result.question)
        }}
      ></span>
      <ul className={styles.ul}>
        {result.answers.map((answer, index) => (
          <li>
            <input
              type="radio"
              id={`input-${index}`}
              name={`answare-radio-${title}`}
              value={answer.text}
              onChange={e => setChoosenValue(e.currentTarget.value)}
              checked={choosenValue === answer.text}
							disabled={isExerciseDone(title)}
            />
            <label
              htmlFor={`input-${index}`}
              className={handleClassName(answer.isCorrect)}
            >
              {answer.text}
            </label>
          </li>
        ))}
      </ul>
      {seeCorrection ? (
        <span
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(result.correction)
          }}
        ></span>
      ) : (
        <button className={styles.button} onClick={handleButtonClick}>
          {isExerciseDone(title) ? 'VER CORREÇÃO' : 'ENVIAR RESPOSTA'}
        </button>
      )}
    </div>
  )
}

export default ExerciseContent
