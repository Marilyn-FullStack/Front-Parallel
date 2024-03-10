import Login from './pages/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from './contexts/AuthContext'
import NavBar from './components/navbar/NavBar'
import Cadastro from './pages/cadastro/Cadastro'
import Perfil from './pages/perfil/Perfil'
import Footer from './components/footer/Footer'
import Developers from './pages/contato/Developers'
import Contato from './pages/contato/Contato'
import { CartProvider } from './contexts/CartContext'
import CardProduto from './components/produtos/cardProduto/CardProduto.tsx'

function App() {
  const produtoExemplo = {
    id: 0,
    nomeProduto: 'Nome do Produto',
    preco: 10.0,
    foto: 'https://institutofortunato.com.br/wp-content/uploads/2021/05/teste.jpg',
    descricao: 'Descrição do Produto'
  };

  return (
    <>
    <CartProvider>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <NavBar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/developers" element={<Developers />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/card" element={<CardProduto produto={produtoExemplo}/>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
      </CartProvider>
    </>
  )
}

export default App
