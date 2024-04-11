import React, { useState } from 'react';
import insumosData from '../../data/mock_data.json';
import './InsumosList.css';
import InsumosDetail from './InsumosDetail';
import Header from '../Header';

const InsumosList = () => {
    const { insumos } = insumosData;

    // Obtener todos los nombres únicos de los insumos
    const nombresInsumos = insumos.map(insumo => Object.keys(insumo)[0]);
    const nombresUnicos = [...new Set(nombresInsumos)];

    const [insumoSeleccionado, setInsumoSeleccionado] = useState(null);

    const handleInsumoClick = (nombreInsumo) => {
        setInsumoSeleccionado(nombreInsumo);
    };

    return (
        <>
            <Header />
            <div className='contenedor'>
                <div className="insumos-container">
                    {/* Mapear sobre los nombres únicos de los insumos y mostrar un botón por cada uno */}
                    {nombresUnicos.map((nombreInsumo, index) => (
                        <button
                            key={index}
                            className="insumo-button"
                            onClick={() => handleInsumoClick(nombreInsumo)}
                        >
                            {nombreInsumo}
                        </button>
                    ))}
                </div>
                {insumoSeleccionado && <InsumosDetail insumos={insumos} nombreInsumo={insumoSeleccionado} />}
            </div>
        </>
    );
};

export default InsumosList;





