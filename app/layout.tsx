// app/layout.tsx or _app.tsx
'use client';
import { useEffect } from 'react';
import { useAuthStore } from './store/useAuthStore';

export default function Layout({ children }: { children: React.ReactNode }) {
  const login = useAuthStore((s) => s.login);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const role = localStorage.getItem('role');
    if (token && user) {
      login({ token, user: JSON.parse(user), role: role || '' });
    }
  }, []);

  return <>
     <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  </>;
}
