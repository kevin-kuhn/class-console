import type { NextPage } from 'next'

import { Layout } from '../../components'

const Class: NextPage = () => {
  return (
    <Layout
      studyList={[
        { type: 'text', title: '324234234', slug: '23423423' },
        { type: 'text', title: '324234234', slug: '23423423' },
        { type: 'video', title: '324234234', slug: '23423423' },
        { type: 'text', title: '324234234', slug: '23423423' },
        { type: 'video', title: '324234234', slug: '23423423' },
        { type: 'exercise', title: '324234234', slug: '23423423' }
      ]}
      meta={{ title: 'trsr', description: 'fdsfs' }}
    >
      Oi class
    </Layout>
  )
}

export default Class
