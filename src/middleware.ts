import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {   
    const url = request.nextUrl.clone();
    console.log(url.pathname)
    if (url.pathname === '/') {
        url.pathname = '/login'
        return NextResponse.redirect(url)   
    }
}