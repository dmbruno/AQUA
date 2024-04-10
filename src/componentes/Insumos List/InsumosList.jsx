import React, { useState } from 'react';
import insumosData from '../../data/mock_data.json';
import './InsumosList.css';
import InsumosDetail from './InsumosDetail';

const InsumosList = () => {
    const { insumos } = insumosData;
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    const handleCategoriaClick = (categoria) => {
        setCategoriaSeleccionada(categoria);
    };

    return (
        <div className='contenedor'>
            <div className="insumos-container">
                {Object.keys(insumos).map((categoria) => (
                    <button
                        key={categoria}
                        className="insumo-button"
                        onClick={() => handleCategoriaClick(categoria)}
                    >
                        {categoria}
                    </button>
                ))}
            </div>
            {categoriaSeleccionada && <InsumosDetail insumos={insumos} categoriaSeleccionada={categoriaSeleccionada} />}
        </div>
    );
};

export default InsumosList;




