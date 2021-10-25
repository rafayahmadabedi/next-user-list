import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

function NotFound() {
    
    const router = useRouter();
    
    useEffect( () => {
        setTimeout(() => {
            router.push('/');
        }, 3*1000);
    }, []);
    return (
        <div>
            <h1>Page not Found!</h1>
        </div>
    )
}

export default NotFound
