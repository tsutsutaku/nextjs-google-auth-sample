import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request })
    const isLoginPage = request.nextUrl.pathname === '/login'

    if (!token && !isLoginPage) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if (token && isLoginPage) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|public|.*\\.svg$).*)'
    ]
}