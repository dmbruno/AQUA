import React, { useState, useContext } from 'react';
import './Contador.css'; // Archivo de estilos CSS para el contador
import { useParams } from 'react-router-dom'; // Importa useParams
import { PresupuestoContext } from '../Context/PresupuestoContext';

const Contador = ({ item }) => {
    const { productId } = useParams(); // Obtiene el productId de los parámetros de la URL
    const [count, setCount] = useState(0);
    const { addToCart } = useContext(PresupuestoContext);

    // Función para decrementar el contador
    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    // Función para incrementar el contador
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const enviarAPresupuesto = () => {
        // Crea el newItem utilizando el productId de los parámetros de la URL
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

