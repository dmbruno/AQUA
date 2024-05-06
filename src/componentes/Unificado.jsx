import React, { useState } from 'react';
import InsumosList from './Insumos List/InsumosList'
import InsumoDetail from './Insumos List/InsumosDetail';
import Header from './Header';
import Footer from './Footer/Footer';

const Unificado = () => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    const handleCategoriaSeleccionada = (categoria) => {
        setCategoriaSeleccionada(categoria);
    };

    return (
        <>
        <Header/>
        <div className="unificado-container">
            <div className="categorias-container" style={{ width: '30%', float: 'left' }}>
                <InsumosList onCategoriaSeleccionada={handleCategoriaSeleccionada} />
            </div>
            <div className="productos-container" style={{ width: '70%', float: 'left' }}>
                <InsumoDetail categoriaSeleccionada={categoriaSeleccionada} />
            </div>
        </div>
        
        </>
    );
};

export default Unificado;
