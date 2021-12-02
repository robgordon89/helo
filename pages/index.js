import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Helo Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Helo Dev" />
        <p className="description">
          my kind of people
        </p>
      </main>

      <Footer />
    </div>
  )
}
