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
        navigate('/insumos');
    };

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value)) {
            setCount(value);
        }
    };

    return (
        <div className="counter-container">
            <div className="counter">
                <button onClick={decrement} className="counter-btn">-</button>
                <input
                    type="number"
                    className="counter-value"
                    value={count}
                    onChange={handleInputChange}
                />
                <button onClick={increment} className="counter-btn">+</button>
            </div>
            <div className='container-btn'>
                <div className='btnEnviar'>
                    <button className="confirm-btnA" onClick={agregarYSeguirComprando}>Enviar y continuar...</button>
                </div>
                <div className='btnSeguir'>
                    <button className="confirm-btnE" onClick={enviarAPresupuesto}>Enviar a Presupuesto</button>
                </div>
            </div>
        </div>
    );
};

export default Contador;

