import React from 'react';
import { useParams } from 'react-router-dom';
import itemsData from '../data/mock_data.json';
import "./ProductoFinal.css"
import Contador from './Contador';
import Presupuesto from './Presupuesto';

const ProductoFinal = () => {
    const { productId } = useParams();


    // Convertir el productId a un número entero
    const id = parseInt(productId);

    // Buscar el producto correspondiente en el array de datos
    const productoFinal = itemsData.find(producto => producto.id === id);


    if (!productoFinal) {
        return <h2>Producto no encontrado</h2>;
    }

    return (
        <div className="producto-final-container">
            
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{productoFinal.nombre}</h5>
                    <p className="card-text">Descripcion: {productoFinal.descripcion}</p>
                    <p className="card-text">Codigo: {productoFinal.codigo}</p>
                    <p className="card-text">Proveedor: {productoFinal.proveedor}</p>
                    <p className="card-text">Categoria: {productoFinal.categoria}</p>
                    <p className="card-text">Precio: {productoFinal.precio}</p>
                </div>
                <div className='contador-container'>
                    <Contador item={productoFinal} />
                </div>
                <Presupuesto /> 
            </div>
            <div>
            </div>
        </div>
    );
};

export default ProductoFinal;




