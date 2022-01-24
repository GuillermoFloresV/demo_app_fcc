import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>User Management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Demo app // User Management </h1>
        <div className='grid'>
          <a className='card' href='/create'>
            Add data to the database here.
          </a>
          <a className='card' href='/users/all'>
            View all data inside of the database
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>
    </div>
  )
}
