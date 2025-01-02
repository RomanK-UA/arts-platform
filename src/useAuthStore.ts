import { create } from 'zustand';

interface AuthState {
    user: null | { uid: string; email: string };
    isAuthenticated: boolean;
    token: string | null; // Add token to store
    setUser: (user: { uid: string; email: string } | null, token?: string) => void;
    clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    token: null,
    setUser: (user, token = null) =>
        set({ user, isAuthenticated: !!user, token }),
    clearUser: () =>
        set({ user: null, isAuthenticated: false, token: null }),
}));