import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {

  return (
    <div className=''>
      <Head>
        <title>Fullstack Next Js Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='index'>
        <p>hello</p>
      </div>
    </div>
  )
}
