import { useMemo, useState } from 'react'
import { useClass } from '../../contexts/ClassContext'
import { useStudyListIcons } from '../../hooks/useStudyListIcons'

import { IPrimaryChildren } from '../../models'

import styles from './styles.module.css'

interface Props {
  items: IPrimaryChildren[]
}

const StudyList: React.FC<Props> = ({ items }) => {
  const { RESOLVE_ICONS } = useStudyListIcons()
  const { currentStudy, handleCurrentStudy } = useClass()

  return (
    <ul className={styles.ul}>
      {items.map(item => (
        <li
          key={item.title}
          className={`${styles.li} ${
            currentStudy?.title == item.title ? styles.active : ''
          }`}
          onClick={() => handleCurrentStudy(item.title)}
          suppressHydrationWarning
        >
          <p className={styles.p}>
            <span className={styles.icon}>
              {RESOLVE_ICONS[item.type]() ?? RESOLVE_ICONS['text']()}
            </span>
            <span>{item.title}</span>
          </p>
        </li>
      ))}
    </ul>
  )
}

export default StudyList
