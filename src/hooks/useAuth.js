import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// Custom hook untuk mengakses AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
