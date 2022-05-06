import { PlayerProvider } from '../../../enums/player-provider'
import { IVideo } from '../../../models'

import styles from './styles.module.css'

interface Props {
  result: IVideo
  handleOnDoneStudy: () => void
}

interface PlayerProps {
  link: string
}

const YoutubePlayer: React.FC<PlayerProps> = ({ link }) => {
  const formattedLink = link.replace('watch?v=', 'embed/')

  return (
    <iframe
      width="560"
      height="315"
      src={formattedLink}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}

const VideoContent: React.FC<Props> = ({ result, handleOnDoneStudy }) => {
  const RESOLVE_PROVIDER = {
    [PlayerProvider.YOUTUBE]: () => <YoutubePlayer link={result.link} />
  }

  return (
    <div className={styles.wrapper} onMouseLeave={handleOnDoneStudy}>
      {(RESOLVE_PROVIDER as any)[result.provider]() ??
        (RESOLVE_PROVIDER as any)[PlayerProvider.YOUTUBE]()}
    </div>
  )
}

export default VideoContent
