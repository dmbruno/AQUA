import React from 'react';
import { useParams } from 'react-router-dom';
import itemsData from '../data/mock_data.json';
import "./ProductoFinal.css"
import Contador from './Contador';
import Header from './Header';
import Footer from './Footer/Footer';

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
                        <p className="card-text">Proveedor: {productoFinal.proveedor}</p>
                        <p className="card-text">{productoFinal.descripcion}</p>
                        <p className="card-text">{productoFinal.precio}</p>
                        <p className="card-text">{productoFinal.codigo}</p>
                        <p className="card-text">Categoria: {productoFinal.categoria}</p>
                    </div>
                    <div className='contador-container'>
                        <Contador item={productoFinal} />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ProductoFinal;




