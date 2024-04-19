import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './componentes/Inicio/Inicio';
import InsumosList from './componentes/Insumos List/InsumosList';
import InsumosDetail from './componentes/Insumos List/InsumosDetail';
import Header from "../src/componentes/Header"
import ProductoFinal from './componentes/ProductoFinal';

function App() {
  return (
    <BrowserRouter>
      
      <Header/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/insumos" element={<InsumosList />} />
          <Route path="/insumos/:categoriaId" element={<InsumosDetail />} />
          <Route path="/producto/:productId" element={<ProductoFinal />} />
          
          <Route path="*" element={<h2>NOT FOUND</h2>} />
          {/* otras rutas aquí */}
        </Routes>

      {/* hacer el footer aca */}

    </BrowserRouter>
  );
}

export default App;
