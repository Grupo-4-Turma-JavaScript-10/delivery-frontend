import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home'
import Receitas from './components/receitas/Receitas';
import Sobre from './pages/sobre/Sobre';
import ProdutoPage from './pages/produto/Produto';
        
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />

      <main className='min-h-[60vh]  bg-gradient-to-b from-black via-[#2B1B14] to-[#3A1F15]'>
        <Routes>
          <Route path='/delivery-frontend/' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/produtos" element={<ProdutoPage />} />
          <Route path='/receitas' element={<Receitas />} />
          <Route path='/sobre' element={<Sobre />} />
        </Routes>
      </main>
        
      <Footer />
    </BrowserRouter>
    </>
  )
};
export default App;