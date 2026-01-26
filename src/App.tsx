import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home'
        
function App() {
 
  return (
    <>
    <BrowserRouter>
      <Navbar />

      <main className='min-h-[80vh]'>

      </main>
        <Home />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;