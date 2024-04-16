import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../componentes/Inicio/Inicio'; 
import InsumosList from '../componentes/Insumos List/InsumosList'; 
import InsumosDetail from '../componentes/Insumos List/InsumosDetail'; 
import Proveedores from '../componentes/Proveedores/Proveedores';

const Routes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={Inicio} />
                <Route path="/insumos" component={InsumosList} />
                <Route path="/insumos/:category" component={InsumosDetail} />
                <Route path="/proveedores" component={Proveedores} />
            </Routes>
        </Router>
    );
};

export default Routes;

