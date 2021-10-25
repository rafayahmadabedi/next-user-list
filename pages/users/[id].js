import React from 'react'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map( user => {
        return {
            params: {
                id: user.id.toString()
            }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();

    return {
        props: {
            user
        }
    }
}

function Details( {user} ) {
    return (
        <div>
            <h3>{user.name}</h3>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Address:</b> {`${user.address.street}, ${user.address.city}`}</p>
        </div>
    )
}

export default Details
