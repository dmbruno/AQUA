import React, { useState, useEffect } from 'react';
import './Proveedores.css';

const Proveedores = ({ productosFiltrados, filtrarProductos, categoriaSeleccionada }) => {
    
    const [proveedores, setProveedores] = useState([]);
    
    const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);
    const [productosFiltradosPorProveedor, setProductosFiltradosPorProveedor] = useState([]);

    
    useEffect(() => {
        const proveedoresUnicos = Array.from(new Set(productosFiltrados.map(item => item.proveedor)));
        setProveedores(proveedoresUnicos);
    }, [productosFiltrados]);

    
    useEffect(() => {
        if (categoriaSeleccionada && proveedorSeleccionado) {
            const productosFiltradosProveedor = productosFiltrados.filter(item =>
                item.categoria === categoriaSeleccionada && item.proveedor === proveedorSeleccionado
            );
            setProductosFiltradosPorProveedor(productosFiltradosProveedor);
        } else {
            setProductosFiltradosPorProveedor([]);
        }
    }, [categoriaSeleccionada, proveedorSeleccionado, productosFiltrados]);

    const handleProveedorSeleccionado = (proveedor) => {
        console.log("proveedor", proveedor);
        console.log("cat", categoriaSeleccionada); 
        if (categoriaSeleccionada) {
            console.log("categoria", categoriaSeleccionada);
            filtrarProductos(categoriaSeleccionada);
        }
        setProveedorSeleccionado(proveedor);
    };
    

    return (
        <div className="proveedores-container">
            <h2 className="proveedores-title">Proveedores:</h2>
            <div className="proveedores-buttons">
                
                {proveedores.map(proveedor => (
                    <button key={proveedor} className="proveedores-button" onClick={() => handleProveedorSeleccionado(proveedor)}>
                        {proveedor}
                    </button>
                ))}
            </div>
            {productosFiltradosPorProveedor.length > 0 && (
                <>
                    <h3 className="productos-title">Productos</h3>
                    <ul className="productos-list">
                        {productosFiltradosPorProveedor.map(producto => (
                            <li key={producto.id} className="producto-item">
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

export default Proveedores;







