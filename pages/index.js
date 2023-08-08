import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <p>I am normal</p>
        <p style="color:red;">I am red</p>
        <p style="color:blue;">I am blue</p>
        <p style="font-size:50px;">I am big</p>
      </main>

      <Footer />
    </div>
  )
}
