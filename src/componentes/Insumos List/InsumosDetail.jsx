import React, { useState } from 'react';

const InsumosDetail = ({ insumos, nombreInsumo }) => {
    const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);

    // Filtrar todos los insumos que tienen el mismo nombre
    const insumosSeleccionados = insumos.filter(insumo => Object.keys(insumo)[0] === nombreInsumo);

    // Filtrar los insumos seleccionados por el proveedor seleccionado
    const insumosFiltradosPorProveedor = proveedorSeleccionado ?
        insumosSeleccionados.filter(insumo => insumo[nombreInsumo].Proveedor === proveedorSeleccionado)
        : insumosSeleccionados;

    return (
        <div className="p-4 w-96">
            <h2 className='font-bold py-3'>{nombreInsumo}</h2>
            {/* Selector de proveedores */}
            <select onChange={(e) => setProveedorSeleccionado(e.target.value)} defaultValue="">
                <option value="">Todos los proveedores</option>
                {/* Obtener la lista de proveedores únicos */}
                {insumosSeleccionados.map((insumo, index) => (
                    <option key={index} value={insumo[nombreInsumo].Proveedor}>
                        {insumo[nombreInsumo].Proveedor}
                    </option>
                ))}
            </select>
            {/* Iterar sobre todos los insumos seleccionados */}
            {insumosFiltradosPorProveedor.map((insumo, index) => {
                const detallesInsumo = insumo[nombreInsumo];
                return (
                    <ul key={index} className='w-96'>
                        <li className="mb-1">
                            <strong>Proveedor:</strong> {detallesInsumo.Proveedor}
                        </li>
                        <li className="mb-3">
                            <strong>Descripción: </strong> {detallesInsumo.Descripción}
                        </li>
                        <li className="mb-3">
                            <strong>ARS : </strong> {detallesInsumo.preciofinal}
                        </li>
                        {/* Agrega aquí los otros detalles del insumo */}
                    </ul>
                );
            })}
        </div>
    );
};

export default InsumosDetail;






