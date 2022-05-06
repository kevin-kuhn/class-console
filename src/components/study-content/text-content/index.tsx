import { IText } from '../../../models'

import DOMPurify from 'dompurify'

import styles from './styles.module.css'

interface Props {
  result: IText
}

const TextContent: React.FC<Props> = ({ result }) => {
  return (
    <div className={styles.wrapper}>
      <span
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(result.html)
        }}
      ></span>
    </div>
  )
}

export default TextContent
