import React from 'react'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res =  await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props : {
            ninjas : data
        }
    }
}

function list( { ninjas } ) {
    return (
        <div>
            <h1>All Ninjas</h1>
            {
                ninjas.map( ninja => (
                    <div key="ninja.id">
                        <Link href={`list/${ninja.id}`}>
                            <a>
                                <h3>{ ninja.name }</h3>
                            </a>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default list
