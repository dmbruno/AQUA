import React, { useState } from 'react';
import itemsData from '../../data/mock_data.json';
import "../../componentes/Insumos List/InsumosList.css";
import Header from "../../componentes/Header";
import Footer from '../Footer/Footer';
import Proveedores from '../Proveedores/Proveedores';

const InsumosList = () => {
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

    
    const categoriasUnicas = Array.from(new Set(itemsData.map(item => item.categoria)));

    
    const filtrarProductos = (categoriaSeleccionada) => {
        const productosCategoria = itemsData.filter(item => item.categoria === categoriaSeleccionada);
        setProductosFiltrados(productosCategoria);
        setCategoriaSeleccionada(categoriaSeleccionada); 
    };

    return (
        <>
            <Header />
            <div className='menu-and-detail-container'>
                <div className='menu-container'>
                    <h2 className='category-title'>Categorías</h2>
                    <div className='category-menu'>
                        
                        {categoriasUnicas.map(categoriaUnica => (
                            <button
                                key={categoriaUnica}
                                className='category-item'
                                onClick={() => filtrarProductos(categoriaUnica)}
                            >
                                {categoriaUnica}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='detail-container'>
                    <Proveedores 
                        productosFiltrados={productosFiltrados} 
                        filtrarProductos={filtrarProductos} 
                        categoriaSeleccionada={categoriaSeleccionada} 
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default InsumosList;


















