import { render } from '@testing-library/react'

import { SWRConfig } from 'swr'
import { ClassProvider } from '../contexts/ClassContext'

const AllTheProviders = ({ children }) => {
  return (
    <SWRConfig value={{ dedupingInterval: 0 }}>
      <ClassProvider pageId={1}>{children}</ClassProvider>
    </SWRConfig>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
