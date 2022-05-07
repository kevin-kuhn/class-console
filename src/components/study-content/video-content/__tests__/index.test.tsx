import { render } from '../../../../test/test-utils'
import VideoContent from '../index'

import { IVideo } from '../../../../models'

import '@testing-library/jest-dom'

describe('TextContent', () => {
  it('should be in document', () => {
    const { container } = render(
      <VideoContent
        result={
          {
            provider: 'youtube',
            link: 'https://www.youtube.com/watch?v=c79C_S0E4IQ'
          } as IVideo
        }
        handleOnDoneStudy={() => {}}
      />
    )

    expect(container).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(
      <VideoContent
        result={
          {
            provider: 'youtube',
            link: 'https://www.youtube.com/watch?v=c79C_S0E4IQ'
          } as IVideo
        }
        handleOnDoneStudy={() => {}}
      />
    )

    expect(container).toMatchSnapshot()
  })
})
