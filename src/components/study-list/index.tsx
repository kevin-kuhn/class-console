import { useEffect } from 'react'
import { useClass } from '../../contexts/ClassContext'
import { useStudyListIcons } from '../../hooks/useStudyListIcons'

import { IPrimaryChildren } from '../../models'
import { CheckIcon } from '../icons'

import styles from './styles.module.css'

interface Props {
  items: IPrimaryChildren[]
	onChangeStudy: () => void
}

const StudyList: React.FC<Props> = ({ items, onChangeStudy }) => {
  const { RESOLVE_ICONS } = useStudyListIcons()
  const { currentStudy, handleCurrentStudy, isStudyDone } = useClass()

	const handleChangeStudy = (title: string) => {
		onChangeStudy()
		handleCurrentStudy(title)
	}

  return (
    <ul className={styles.ul}>
      {items.map(item => (
        <li
          key={item.title}
          className={`${styles.li} ${
            currentStudy?.title == item.title ? styles.active : ''
          }`}
          onClick={() => handleChangeStudy(item.title)}
          suppressHydrationWarning
        >
          <p className={styles.p}>
            <span className={styles.icon}>
              {RESOLVE_ICONS[item.type]() ?? RESOLVE_ICONS['text']()}
            </span>
            <span>{item.title}</span>
          </p>
          {isStudyDone(item.title) ? (
            <span className="icon">
              <CheckIcon />
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  )
}

export default StudyList
