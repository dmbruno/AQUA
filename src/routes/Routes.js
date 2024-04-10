import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from '../componentes/Inicio/Inicio'; 
import InsumosList from '../componentes/Insumos List/InsumosList'; 
import InsumosDetail from '../componentes/Insumos List/InsumosDetail'; 

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route path="/insumos" component={InsumosList} />
                <Route path="/detalle/:categoria" component={InsumosDetail} />
            </Switch>
        </Router>
    );
};

export default Routes;
