import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Translation from './pages/Translation'
import Illustration from './pages/Illustration'
import Modelling3D from './pages/Modelling3D'
import './App.css' 

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/translation" element={<Translation />} />
            <Route path="/illustration" element={<Illustration />} />
            <Route path="/3d-modelling" element={<Modelling3D />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
