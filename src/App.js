import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from './componentes/Inicio/Inicio';
import InsumosList from './componentes/Insumos List/InsumosList';
import InsumosDetail from './componentes/Insumos List/InsumosDetail';
import Presupuesto from './componentes/Presupuesto';
import ProductoFinal from './componentes/ProductoFinal';
import { useContext } from 'react';
import { UserContext } from './Context/userContext';
import IniciarSesion from './componentes/IniciarSesion'


function App() {
  const { email } = useContext(UserContext)

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<IniciarSesion />} />

        <Route path="/inicio" element={<Inicio />} />
        <Route path="/insumos" element={<InsumosList />} />
        <Route path="/insumos/:categoriaId" element={<InsumosDetail />} />
        <Route path="/producto/:productId" element={<ProductoFinal />} />
        <Route path="/presupuesto" element={<Presupuesto />} />
        <Route path="*" element={<h2>NOT FOUND</h2>} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
