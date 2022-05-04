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
          {item.title}
        </li>
      ))}
    </ul>
  )
}

export default StudyList
