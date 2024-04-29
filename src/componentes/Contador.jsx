import React, { useState, useContext } from 'react';
import './Contador.css';
import { useParams, useNavigate } from 'react-router-dom';
import { PresupuestoContext } from '../Context/PresupuestoContext';

const Contador = ({ item }) => {
    const { productId } = useParams();
    const [count, setCount] = useState(0);
    const { addToCart } = useContext(PresupuestoContext);
    const navigate = useNavigate();

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const enviarAPresupuesto = () => {
        const newItem = {
            id: productId,
            nombre: item.nombre,
            precio: item.precio,
            cantidad: count,
        };
        addToCart(newItem);

        // Navegar a la pantalla de Presupuesto
        navigate('/presupuesto');
    };

    const agregarYSeguirComprando = () => {
        const newItem = {
            id: productId,
            nombre: item.nombre,
            precio: item.precio,
            cantidad: count,
        };
        addToCart(newItem);

        // Navegar de regreso a InsumosList
        navigate('/insumos');
    };

    return (
        <div className="counter-container">
            <div className="counter">
                <button onClick={decrement} className="counter-btn">-</button>
                <span className="counter-value">{count}</span>
                <button onClick={increment} className="counter-btn">+</button>
            </div>
            <div className='container-btn'>
                <div className='btnEnviar'>
                    <button className="confirm-btn" onClick={agregarYSeguirComprando}>Agregar y Seguir Comprando</button>
                </div>
                <div className='btnSeguir'>
                    <button className="confirm-btn" onClick={enviarAPresupuesto}>Enviar a Presupuesto</button>
                </div>
            </div>
        </div>
    );
};

export default Contador;

