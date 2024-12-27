import { useAuthStore } from '@/useAuthStore'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export default function Protected({ children }) {
    const { isAuthenticated } = useAuthStore();
    const router = useRouter();
    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login')
            console.log('unathorised!!!!')
        }
    }, [isAuthenticated, router])

    return isAuthenticated ? children : null;
}
