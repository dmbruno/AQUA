import React from 'react';
import { useParams } from 'react-router-dom';
import itemsData from '../../data/mock_data.json';

const InsumosDetail = () => {
    const { nombre } = useParams(); // Obtener el nombre de la categoría de la URL
    console.log("nombre", nombre);

    // Obtener los productos de la categoría específica desde el JSON
    const categoria = itemsData[nombre];
    console.log("categoria", categoria);

    // Verificar si la categoría existe
    if (!categoria) {
        return <div>La categoría {nombre} no existe</div>;
    }

    // Obtener solo los nombres de los productos de la categoría
    const nombresProductos = categoria.productos.map(producto => producto.Nombre);

    // Renderizar la lista de nombres de productos
    return (
        <div className="insumos-detail-container">
            <h2>Productos en la categoría {nombre}</h2>
            <ul>
                {nombresProductos.map((nombreProducto, index) => (
                    <li key={index}>{nombreProducto}</li>
                ))}
            </ul>
        </div>
    );
};

export default InsumosDetail;




















