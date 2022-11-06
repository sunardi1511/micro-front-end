import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

function random  ({data})  {
    console.log( data)
    return (
        <>
            <Head>
                <title>MICRO|RANDOM</title>
            </Head>

            <main className='container mt-12 mx-auto'>
                <h1 className='text-3xl'>RANDOM WORDS</h1>
                <ul>
                    {data.map((todo) => {
                        return (
                            <li key={todo.id} className='border border-indigo-800 p-5'>
                                {todo?.title ?? ""}
                                <Link href="/random/[id]" as={`/random/${todo.id}`}>
                                    <a>RANDOM</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </main>
        </>
    )
}

random.getInitialProps = async () => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => json)
        return { data };
    } catch (error) {

    }
}

export default random