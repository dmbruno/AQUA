import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import itemsData from '../../data/mock_data.json';
import "./InsumosDetail.css"
import Proveedores from '../Proveedores/Proveedores';
import ProductoFinal from '../ProductoFinal';

const InsumoDetail = ({ categoriaSeleccionada }) => {
    const { categoriaId } = useParams(); 
    const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    
    useEffect(() => {
        // Filtrar los productos cuando cambie la categoría seleccionada, o el proveedor seleccionado
        let productosFiltradosTemp = itemsData.filter(item => item.categoria === categoriaId);
        if (proveedorSeleccionado) {
            productosFiltradosTemp = productosFiltradosTemp.filter(item => item.proveedor === proveedorSeleccionado);
        }
        setProductosFiltrados(productosFiltradosTemp);
    }, [categoriaId, proveedorSeleccionado]);

    const handleProveedorSeleccionado = (proveedor) => {
        setProveedorSeleccionado(proveedor);
    };

    const handleProductoSeleccionado = (producto) => {
        setProductoSeleccionado(producto);
    };

    return (
        <div className="insumo-detail-container">
            <h2 className="categoria-title">Categoría: {categoriaId}</h2>
            <Proveedores 
                data={itemsData} 
                setProveedorSeleccionado={handleProveedorSeleccionado} 
                categoriaSeleccionada={categoriaId} 
            />
            {productosFiltrados.length > 0 && (
                <>
                    <h3 className="productos-title">Productos</h3>
                    <ul className="productos-list">
                        {productosFiltrados.map(producto => (
                            <li key={producto.id} className="producto-item" onClick={() => handleProductoSeleccionado(producto)}>
                                <strong className="nombre-label">Nombre:</strong> {producto.nombre}<br />
                                <strong className="descripcion-label">Descripción:</strong> {producto.descripcion}<br />
                            </li>
                        ))}
                    </ul>
                </>
            )}
            {productoSeleccionado ? <ProductoFinal producto={productoSeleccionado} /> : null}
        </div>
    );
};

export default InsumoDetail;

































