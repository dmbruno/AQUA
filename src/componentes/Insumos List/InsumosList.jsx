import React from 'react';
import { Link, useParams } from 'react-router-dom';
import itemsData from '../../data/mock_data.json';
import "../../componentes/Insumos List/InsumosList.css"
import Header from "../../componentes/Header";
import Footer from '../Footer/Footer';

const InsumosList = () => {
    const { categoria } = useParams(); // Obtener el parámetro de la URL

    // Filtrar los productos por la categoría seleccionada
    const productosCategoria = itemsData.filter(item => item.categoria === categoria);

    // Obtener categorías únicas
    const categoriasUnicas = new Set();
    itemsData.forEach(item => {
        categoriasUnicas.add(item.categoria);
    });
    const categoriasArray = Array.from(categoriasUnicas);

    return (
        <>
            <Header />
            <div>
                <h2 className='category-title'>Insumos por Categorías</h2>
            </div>
                <div className='category-container'>
                    <div className='category-buttons'>
                        {categoriasArray.map(categoria => (
                            <Link key={categoria} to={`/insumos/${categoria}`} className='category-button'>
                                {typeof categoria === 'string' ? categoria.toUpperCase() : ''}
                            </Link>
                        ))}
                    </div>
                </div>
              
            <Footer/>
        </>
    );
};

export default InsumosList;












