import { render } from '../../../test/test-utils'
import Layout from '../index'

import '@testing-library/jest-dom'

import { IMeta } from '../../../models'

describe('Layout', () => {
  it('should be in document', () => {
    const { container } = render(
      <Layout meta={{} as IMeta} studyList={[]}>q
        Teste
      </Layout>
    )

    expect(container).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(
      <Layout meta={{} as IMeta} studyList={[]}>
        Teste
      </Layout>
    )

    expect(container).toMatchSnapshot()
  })
})
