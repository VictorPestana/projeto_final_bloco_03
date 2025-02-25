import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria'
import ListaCategoria from './components/categorias/listacategoria/ListaCategoria'
import FormCategoria from './components/categorias/formcategoria/FormCategoria'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <main className="min-h-">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrarcategoria" element={<FormCategoria />} />
          <Route path="/categorias" element={<ListaCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          <Route path="/editarcategoria/:id" element={<FormCategoria />} />

        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
</>
  )
}

export default App
