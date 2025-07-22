// lib/auth.ts
import axios from 'axios';

export const getCSRF = () => {
  return axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sanctum/csrf-cookie`, {
    withCredentials: true,
  });
};
