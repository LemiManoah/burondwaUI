import { create } from 'zustand';

type Role = {
  id: number;
  name: string;
  description: string;
};

type User = {
  id: number;
  name: string;
  email: string;
  roles: Role[];
};

type AuthStore = {
  user: User | null;
  token: string | null;
  role: string | null;
  login: (payload: { user: User; token: string; role: string }) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  role: null,
  login: ({ user, token, role }) => {
    set({ user, token, role });
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('role', role);
  },
  logout: () => {
    set({ user: null, token: null, role: null });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
  },
}));
