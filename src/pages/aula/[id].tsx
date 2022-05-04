import type { NextPage } from 'next'

import { Layout } from '../../components'

const Class: NextPage = () => {
  return <Layout classItems={<p>teste</p>} meta={{ title: 'trsr', description: "fdsfs" }}>Oi class</Layout>
}

export default Class
