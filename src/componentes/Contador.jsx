import React, { useState } from 'react';
import './Contador.css'; // Archivo de estilos CSS para el contador

const Contador = () => {
    // Estado para almacenar el valor del contador
    const [count, setCount] = useState(0);

    // Función para decrementar el contador
    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    // Función para incrementar el contador
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div className="counter-container">
            <div className="counter">
                <button onClick={decrement} className="counter-btn">-</button>
                <span className="counter-value">{count}</span>
                <button onClick={increment} className="counter-btn">+</button>
            </div>
            <button className="confirm-btn">Confirmar compra</button>
        </div>
    );
};

export default Contador;

