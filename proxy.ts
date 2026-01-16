import { NextRequest, NextResponse } from "next/server";

export default function proxy(request: NextRequest){
    console.log('--------Proxy--------');
    console.log('Request URL:', request.url);
    console.log('Request pathname:', request.nextUrl.pathname);
    const isLoggedIn = true;
    if(!isLoggedIn){
        return NextResponse.redirect(new URL('/auth/signup', request.url));
    }
    return NextResponse.next();
}
export const config = {
    matcher: '/dashboard/:path*'
}