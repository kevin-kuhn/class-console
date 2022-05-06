import { IPdf } from '../../../models'

import styles from './styles.module.css'

interface Props {
  result: IPdf
}

const PdfContent: React.FC<Props> = ({ result }) => {
  return (
    <a className={styles.a} href={result.link} target="_blank">
      Acesse o conteúdo
    </a>
  )
}

export default PdfContent
