import { useSession, signOut } from 'next-auth/react'
import React from 'react'

function Home() {
    const { data: session, status } = useSession()

    return (
        <div>
            <h1>My Client Component</h1>
            <h2>User ID: {session?.user?.email}</h2>
            <h2>status: {status}</h2>
            <button
                onClick={() => signOut({ callbackUrl: '/login' })}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
                ログアウト
            </button>
        </div>
    )
}

export default Home