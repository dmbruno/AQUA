import React from 'react';

const ItemsPorProveedor = ({ insumos, nombreProveedorSeleccionado }) => {
    // Filtrar los insumos del proveedor seleccionado
    const insumosDelProveedor = insumos.filter(insumo => insumo.Proveedor === nombreProveedorSeleccionado);

    return (
        <div>
            <h2>Items del Proveedor: {nombreProveedorSeleccionado}</h2>
            <ul>
                {insumosDelProveedor.map((insumo, index) => (
                    <li key={index}>{insumo.Descripción}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemsPorProveedor;
