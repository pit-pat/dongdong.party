import type { GetServerSideProps, NextPage } from 'next'
import Home from '@/components/Home'

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  return {
    props: {
      data: 1,
    },
  }
}

type PageProps = {
  data: number
}

const Page: NextPage<PageProps> = ({ data }) => {
  return (
    <>
      {data}
      <Home />
    </>
  )
}

export default Page
