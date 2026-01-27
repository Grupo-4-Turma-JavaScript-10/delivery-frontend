import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre';
        
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />

      <main className='min-h-[60vh]'>
        <Sobre />
      </main>
        
      <Footer />
    </BrowserRouter>
    </>
  )
};
export default App;