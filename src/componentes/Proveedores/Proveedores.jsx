import React from 'react';
import './Proveedores.css'

const Proveedores = ({ data }) => {
    // Extraer nombres únicos de los proveedores
    const proveedoresUnicos = Array.from(new Set(data.map(item => item.proveedor)));

    return (
        <div className="proveedores-container">
            <h2 className="proveedores-title">Proveedores:</h2>
            <div className="proveedores-buttons">
                {/* Mapear sobre los nombres únicos de los proveedores y renderizar botones para cada uno */}
                {proveedoresUnicos.map(proveedor => (
                    <button key={proveedor} className="proveedores-button" onClick={() => console.log(`Proveedor seleccionado: ${proveedor}`)}>
                        {proveedor}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Proveedores;

