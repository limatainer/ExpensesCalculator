import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contato from './pages/Contato'
import FormPage from './pages/FormPage'
import Home from './pages/Home'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<FormPage />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
