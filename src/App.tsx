import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Toastify from './components/toastify/Toastify'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />   
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toastify />
    </BrowserRouter>
  )
}

export default App
