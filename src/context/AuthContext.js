import React, { createContext, useState, useContext } from 'react';

// Membuat context
const AuthContext = createContext();

// Membuat provider untuk context
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (username, password) => {
    const users = [
      { username: 'rimu', password: 'rimu', role: 'superadmin' },
      { username: 'admin', password: 'admin123', role: 'admin' },
      { username: 'pegawai', password: 'pegawai123', role: 'employee' },
      { username: 'customer', password: 'customer123', role: 'customer' },
      { username: 'vip', password: 'vip123', role: 'vip' },
    ];

    const user = users.find(
      user => user.username === username && user.password === password
    );

    if (user) {
      setCurrentUser(user);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Named export untuk useAuth hook
export const useAuth = () => useContext(AuthContext);

// Named export untuk AuthContext, jika Anda ingin mengimpor dan menggunakan langsung
export { AuthContext };
