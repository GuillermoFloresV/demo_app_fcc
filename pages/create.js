import Head from 'next/head'
import Layout from '../components/layout'
import AddUserForm from '../components/AddUserForm'
import { PrismaClient } from '@prisma/client'
import user from './api/user';
import Input from '../components/Input'

async function saveUser(user) {
    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringifiy(user)
    });
    if (!response.ok){
        throw new Error(response.statusText);
    }

    return await response.json();
}

export default function Create(){
    return (
        <Layout>
          <div className="container">
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main>
            <h1>Add a user</h1>
            <AddUserForm
              onSubmit={async (data,e) => {
                try {
                  await saveUser(data);
                } catch {
                  console.log(err);
                }
              }}
            />
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