import Login from './pages/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from './contexts/AuthContext'
import NavBar from './components/navbar/NavBar'

function App() {

  return (
    <>
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
