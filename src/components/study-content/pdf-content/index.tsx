import { IPdf } from '../../../models'

import styles from './styles.module.css'

interface Props {
  result: IPdf
  handleOnDoneStudy: () => void
}

const PdfContent: React.FC<Props> = ({ result, handleOnDoneStudy }) => {
  return (
    <a
      className={styles.a}
      href={result.link}
      target="_blank"
      onClick={handleOnDoneStudy}
    >
      Acesse o conteúdo
    </a>
  )
}

export default PdfContent
