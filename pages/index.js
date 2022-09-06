import Head from 'next/head'


export default function Home() {
  return (
    <div className="container mx-auto mt-4 text-red-500">
      <Head>
        <title>MICRO-SERVICE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Halaman Utama</h1>
      </main>
    </div>
  )
}
