import React from 'react';
import AppRoutes from './routes/Routes';
import AppHeader from './components/Header';  // Pastikan header diimpor dan digunakan
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppRoutes />
    </div>
  );
}

export default App;
