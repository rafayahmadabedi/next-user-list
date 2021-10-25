import React from 'react'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res =  await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return {
        props : {
            users
        }
    }
}

function Users( { users } ) {
    return (
        <div>
            <h1>All Ninjas</h1>
            {
                users.map( user => (
                    <div key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>
                                <h3>{ user.name }</h3>
                            </a>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Users
