import type { NextPage, GetServerSideProps } from 'next'

const Home: NextPage = () => {
  return <></>
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/class/1',
      permanent: true
    }
  }
}
export default Home
