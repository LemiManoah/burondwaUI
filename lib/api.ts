import axios from 'axios';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
export const api = axios.create({
  baseURL: `${backendUrl}/api/v1`,
  withCredentials: true, 
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  // Manually attach the CSRF token if it's in cookies
  const xsrfToken = getCookie('XSRF-TOKEN');
  if (xsrfToken) {
    config.headers['X-XSRF-TOKEN'] = decodeURIComponent(xsrfToken);
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Helper to read cookies
function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
}
