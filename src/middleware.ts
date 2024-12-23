import { NextResponse } from 'next/server';
import { auth } from './firebase-config';
import { adminAuth } from './firebase-admin';
export async function middleware(request) {
    const token = request.cookies.get('token')?.value;

    const protectedRoutes = ['/dashboard', '/profile', '/settings'];
    const isProtectedRoute = protectedRoutes.some(route =>
        request.nextUrl.pathname.startsWith(route)
    );

    if (!isProtectedRoute) {
        return NextResponse.next();
    }

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        await adminAuth.verifyIdToken(token);
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: ['/dashboard/:path*', '/profile/:path*', '/settings/:path*']
};