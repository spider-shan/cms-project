import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
function App() {
  return (
<AuthProvider>
  <AppRoutes />
</AuthProvider>
  )
}

export default App
