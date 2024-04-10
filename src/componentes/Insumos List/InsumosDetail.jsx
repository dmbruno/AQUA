import React from 'react';

const InsumosDetail = ({ insumos, categoriaSeleccionada }) => {
    const insumosCategoria = insumos[categoriaSeleccionada];

    return (
        <div className=" p-4">
            <h2 className='font-bold py-3'>{categoriaSeleccionada}</h2>
            <ul>
                {Object.keys(insumosCategoria).map((nombre) => (
                    <li key={nombre} className="mb-1">
                        <strong>{nombre}</strong> - ARS $ {insumosCategoria[nombre].price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InsumosDetail;


