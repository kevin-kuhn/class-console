import type { NextPage, GetStaticProps } from 'next'

const Home: NextPage = () => {
  return <></>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: '/aula/1',
      permanent: true
    }
  }
}

export default Home
