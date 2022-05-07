import { render } from '../../../../test/test-utils'
import PdfContent from '../index'

import { IPdf } from '../../../../models'

import '@testing-library/jest-dom'

describe('PdfContent', () => {
  it('should be in document', () => {
    const { container } = render(
      <PdfContent result={{} as IPdf} handleOnDoneStudy={() => {}} />
    )

    expect(container).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(
      <PdfContent result={{} as IPdf} handleOnDoneStudy={() => {}} />
    )

    expect(container).toMatchSnapshot()
  })
})
