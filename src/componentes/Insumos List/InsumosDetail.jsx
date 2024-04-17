import React from 'react';
import { useParams } from 'react-router-dom';
import itemsData from '../../data/mock_data.json';

const InsumoDetail = () => {
    const { categoriaId } = useParams(); // Obtener la categoriaId de los parámetros de la URL

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

    return (
        <div>
            <h2>Categoría: {categoriaId}</h2>
            <h3>Productos:</h3>
            <ul>
                {productosUnicosArray.map(producto => (
                    <li key={producto.codigo}>
                        <strong>Nombre:</strong> {producto.nombre}<br />
                        <strong>Proveedor:</strong> {producto.proveedor}<br />
                        <strong>Código:</strong> {producto.codigo}<br />
                        <strong>Descripción:</strong> {producto.descripcion}<br />
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InsumoDetail;


























