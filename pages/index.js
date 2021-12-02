import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>helo.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Helo Dev" />
        <p className="description">
          Helo you beautiful dev people
        </p>
      </main>

      <Footer />
    </div>
  )
}
