import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home'
import Receitas from './components/receitas/Receitas';
        
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />

      <main className='min-h-[60vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/receitas' element={<Receitas />} />
        </Routes>
      </main>
        
      <Footer />
    </BrowserRouter>
    </>
  )
};
export default App;