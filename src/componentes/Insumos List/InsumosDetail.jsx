// InsumoDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import itemsData from '../../data/mock_data.json';
import "./InsumosDetail.css"
import Proveedores from '../Proveedores/Proveedores';

const InsumoDetail = () => {
    const { categoriaId } = useParams(); // Obtener la categoriaId de los parámetros de la URL

    // Estado para almacenar el proveedor seleccionado
    const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);

    // Filtrar los productos por la categoría seleccionada
    const productosCategoria = itemsData.filter(item => item.categoria === categoriaId);

    // Crear un conjunto para almacenar los nombres únicos de los productos
    const productosUnicos = new Set();

    // Iterar sobre los productos filtrados y agregar los productos únicos al conjunto
    productosCategoria.forEach(producto => {
        productosUnicos.add(JSON.stringify(producto)); // Convertir el objeto a cadena para que el conjunto considere cada producto único
    });

    // Convertir el conjunto a un array y mapear sobre él para mostrar los productos únicos
    const productosUnicosArray = Array.from(productosUnicos).map(productoString => JSON.parse(productoString));

    // Filtrar los productos según el proveedor seleccionado
    const productosFiltradosPorProveedor = proveedorSeleccionado ? productosUnicosArray.filter(producto => producto.proveedor === proveedorSeleccionado) : productosUnicosArray;

    return (
        <div className="insumo-detail-container">
            <Proveedores data={itemsData} setProveedorSeleccionado={setProveedorSeleccionado} />
            <h2 className="categoria-title">Categoría: {categoriaId}</h2>
            {proveedorSeleccionado && ( // Renderizar solo si se ha seleccionado un proveedor
                <>
                    <h3 className="productos-title">Productos</h3>
                    <ul className="productos-list">
                        {productosFiltradosPorProveedor.map(producto => (
                            <li key={producto.codigo} className="producto-item">
                                <strong className="nombre-label">Nombre:</strong> {producto.nombre}<br />
                                <strong className="descripcion-label">Descripción:</strong> {producto.descripcion}<br />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default InsumoDetail;



























