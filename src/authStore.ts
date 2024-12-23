import { create } from 'zustand';
import { auth } from './firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),

  // Initialize auth state listener
  initAuth: () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        set({ user, loading: false });
      } else {
        set({ user: null, loading: false });
      }
    });

    return unsubscribe;
  },
}));