import { NextResponse } from "next/server";

export function middleware(request) {
    const token = request.cookies.get("authToken"); // Replace "authToken" with your cookie name

    // Redirect unauthenticated users trying to access protected routes
    if (!token && request.nextUrl.pathname !== "/auth") {
        return NextResponse.redirect(new URL("/auth", request.url));
    }

    // Optionally: Add user information to the request if token is valid
    if (token) {
        request.headers.set("Authorization", `Bearer ${token}`);
    }
}

export const config = {
    matcher: ["/gallery", "/profile/:path*", "/upload", "/notifications"],
};