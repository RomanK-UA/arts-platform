import { useAuthStore } from '@/useAuthStore'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export default function UserPage({children}) {
    const { isAuthenticated } = useAuthStore();
    const router = useRouter();
    useEffect(() => {
        if(!isAuthenticated)  {
            router.push('/login')
        }
    }, [isAuthenticated, router])

  return isAuthenticated ? children : null;
}
