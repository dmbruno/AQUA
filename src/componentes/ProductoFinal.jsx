import React from 'react';
import { useParams } from 'react-router-dom';
import itemsData from '../data/mock_data.json';
import "./ProductoFinal.css"
import Contador from './Contador';
import Header from './Header';

const ProductoFinal = () => {

    const { productId } = useParams();
    const id = parseInt(productId);
    const productoFinal = itemsData.find(producto => producto.id === id);


    if (!productoFinal) {
        return <h2>Producto no encontrado</h2>;
    }

    return (
        <>
            <Header />
            <div className="producto-final-container">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{productoFinal.nombre}</h5>
                        <p className="card-text">{productoFinal.descripcion}</p>
                        <p className="card-text">Cod: {productoFinal.codigo}</p>
                        <p className="card-text">Proveedor: {productoFinal.proveedor}</p>
                        <p className="card-text">Categoria: {productoFinal.categoria}</p>
                        <p className="card-text">Precio: {productoFinal.precio}</p>
                    </div>
                    <div className='contador-container'>
                        <Contador item={productoFinal} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductoFinal;




