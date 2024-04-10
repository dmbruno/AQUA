import React from 'react';

const InsumosDetail = ({ insumos, categoriaSeleccionada }) => {
    const insumosCategoria = insumos[categoriaSeleccionada];

    return (
        <div className="insumos-detalle p-4">
            <h2 className='font-bold text-2xl py-3'>{categoriaSeleccionada}</h2>
            <ul className="insumo-list">
                {Object.keys(insumosCategoria).map((nombre) => (
                    <li key={nombre} className="insumo-item mb-2">
                        <strong>{nombre}</strong> - ARS $ {insumosCategoria[nombre].price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InsumosDetail;


