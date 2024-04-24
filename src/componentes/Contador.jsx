import React, { useState, useContext } from 'react';
import './Contador.css'; 
import { useParams } from 'react-router-dom'; 
import { PresupuestoContext } from '../Context/PresupuestoContext';

const Contador = ({ item }) => {
    const { productId } = useParams(); 
    const [count, setCount] = useState(0);
    const { addToCart } = useContext(PresupuestoContext);

    
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
        console.log("item nuevo", newItem);
    };

    return (
        <div className="counter-container">
            <div className="counter">
                <button onClick={decrement} className="counter-btn">-</button>
                <span className="counter-value">{count}</span>
                <button onClick={increment} className="counter-btn">+</button>
            </div>
            <button className="confirm-btn" onClick={enviarAPresupuesto}>Enviar a Presupuesto</button>
        </div>
    );
};

export default Contador;

