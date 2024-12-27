import { create } from 'zustand';

interface AuthState {
    user: null | { uid: string; email: string }; // Define the structure of the user object
    isAuthenticated: boolean;
    setUser: (user: { uid: string; email: string } | null) => void;
    clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    setUser: (user) =>
        set({ user, isAuthenticated: !!user }),
    clearUser: () =>
        set({ user: null, isAuthenticated: false }),
}));