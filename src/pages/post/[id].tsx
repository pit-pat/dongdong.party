import { GetServerSideProps, NextPage } from 'next'

import Head from 'next/head'

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  params,
}) => {
  console.log(params)

  return {
    props: {
      postId: parseInt(params?.id as string) || 0,
    },
  }
}

type PageProps = {
  postId: number
}

const MyComponent: React.FC = () => {
  return (
    <>
      <Head>
        <title>Title by child compoent</title>
        <meta property="description" content="자식 설명" key="og-desc" />
      </Head>
      <div>Child component</div>
    </>
  )
}

const Page: NextPage<PageProps> = ({ postId }) => {
  return (
    <>
      <Head>
        <title>ID Page</title>
        <meta property="description" content="부모 설명" key="og-desc" />
      </Head>
      <div>ID page</div>
      <p>{postId}</p>
      <div>
        <MyComponent />
      </div>
    </>
  )
}

export default Page
