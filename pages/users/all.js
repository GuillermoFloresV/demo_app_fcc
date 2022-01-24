import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const users = await prisma.user.findMany();
  console.log(users);
  return{
    props: { users : users }
  };
}

export default function Home( { users }) {
  return (
    <Layout>
      <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='table'>
        {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small> 
              </li>))}
          </ul>
        </section> */}
        {users.map(users => (
          <div key={users.id}>
            <a>
              <h3>{users.lastName}, {users.firstName}</h3>
            </a>
          </div>
         ))}
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
    </Layout>
  )
}
