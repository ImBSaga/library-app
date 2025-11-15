// Types
import type { User } from '@/types/Auth.type';

export const setAuth = (token: string, user: User) => {
  localStorage.setItem('authToken', token);
  localStorage.setItem('authUser', JSON.stringify(user));
};

export const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const getAuthUser = () => {
  const user = localStorage.getItem('authUser');
  return user ? JSON.parse(user) : null;
};

export const clearAuth = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('authUser');
};
