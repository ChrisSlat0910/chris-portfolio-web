import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'
import Themes from './components/Themes'


function App() {
  return (
  <BrowserRouter basename="/chris-portfolio-web/">
    <Navbar />
    <Themes />
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='portfolio' element={<Portfolio />}/>
      <Route path='contact' element={<Contact />}/>
    </Routes>
  </BrowserRouter>    
  )
}

export default App
