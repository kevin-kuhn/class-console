import axios from 'axios'
import type { GetServerSideProps, NextPage } from 'next'

import { unstable_serialize } from 'swr'

import { Layout } from '../../components'
import { useClass } from '../../contexts/ClassContext'
import { IPrimaryChildren, IResponse } from '../../models'

const Class: NextPage = () => {
  const { studyList, meta } = useClass()

  return (
    <Layout studyList={studyList} meta={meta}>
      Oi class
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const id = ctx.query.id as string
  const response = await axios.get(
    `https://bff-qa.mesalva.com/json/pages/desafio-mesalva-web?page=${id}`
  )

  return {
    props: {
      id,
      fallback: {
        [unstable_serialize(['desafio-mesalva-web', id])]: {
          meta: response.data?.meta ?? null,
          result: response.data?.result ?? null
        }
      }
    }
  }
}

export default Class
