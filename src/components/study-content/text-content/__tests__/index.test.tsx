import { render } from '../../../../test/test-utils'
import TextContent from '../index'

import { IText } from '../../../../models'

import '@testing-library/jest-dom'

describe('TextContent', () => {
  it('should be in document', () => {
    const { container } = render(
      <TextContent result={{} as IText} handleOnDoneStudy={() => {}} />
    )

    expect(container).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(
      <TextContent result={{} as IText} handleOnDoneStudy={() => {}} />
    )

    expect(container).toMatchSnapshot()
  })
})
