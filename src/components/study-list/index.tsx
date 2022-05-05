import { IPrimaryChildren } from '../../models'

import styles from './styles.module.css'

interface Props {
  items: IPrimaryChildren[]
}

const StudyList: React.FC<Props> = ({ items }) => {
  return (
    <ul className={styles.ul}>
      {items.map(item => (
        <li key={item.title} className={styles.li}>
          <p className={styles.p}>
            <span className={styles.icon}>X</span>
            <span>{item.title}</span>
          </p>
        </li>
      ))}
    </ul>
  )
}

export default StudyList
