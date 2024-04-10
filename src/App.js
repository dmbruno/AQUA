import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './componentes/Inicio/Inicio';
import InsumosList from './componentes/Insumos List/InsumosList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/insumos" element={<InsumosList />} />
        {/* otras rutas aquí */}
      </Routes>
    </Router>
  );
}

export default App;
