import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <nav>
            <h1>User list</h1>

            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/users"><a>User List</a></Link>
        </nav>
    )
}
// testing commit change
export default Navbar
