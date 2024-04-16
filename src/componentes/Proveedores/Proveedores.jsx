import React from 'react';
import ItemsPorProveedor from './ItemsPorProveedor'; // Importa el componente ItemsPorProveedor aquí

const Proveedores = ({ insumos, nombreItemSeleccionado, nombreProveedorSeleccionado, setNombreProveedorSeleccionado }) => {
    // Filtrar los proveedores únicos para el ítem seleccionado
    const proveedoresUnicos = [...new Set(insumos
        .filter(insumo => insumo.item === nombreItemSeleccionado)
        .map(insumo => insumo.Proveedor)
    )];

    return (
        <div>
            <h2>Proveedores para el ítem: {nombreItemSeleccionado}</h2>
            <ul>
                {proveedoresUnicos.map((proveedor, index) => (
                    <li key={index}>
                        {/* Agrega un botón para seleccionar el proveedor */}
                        <button onClick={() => setNombreProveedorSeleccionado(proveedor)}>
                            {proveedor}
                        </button>
                    </li>
                ))}
            </ul>
            {/* Renderiza el componente ItemsPorProveedor solo si hay un proveedor seleccionado */}
            {nombreProveedorSeleccionado && (
                <ItemsPorProveedor nombreProveedorSeleccionado={nombreProveedorSeleccionado} insumos={insumos} />
            )}
        </div>
    );
};

export default Proveedores;

