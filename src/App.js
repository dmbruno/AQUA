import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './componentes/Inicio/Inicio';
import InsumosList from './componentes/Insumos List/InsumosList';
import InsumosDetail from './componentes/Insumos List/InsumosDetail';
import Proveedores from './componentes/Proveedores/Proveedores';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/insumos" element={<InsumosList />} />
        <Route path="/categoria/:categoriaId" element={<InsumosDetail />} />
        <Route path="/proveedores" element={<Proveedores />} />
        {/* otras rutas aquí */}
      </Routes>
    </Router>
  );
}

export default App;
