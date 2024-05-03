import React, { useContext } from 'react';
import { PresupuestoContext } from '../Context/PresupuestoContext';
import './Presupuesto.css'; // Importa el archivo CSS de estilos
import Header from './Header';
import Footer from './Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Presupuesto = () => {
    const { PresupuestoItem, removeFromCart } = useContext(PresupuestoContext);


    const calcularTotalPresupuesto = () => {
        let total = 0;
        PresupuestoItem.forEach(item => {

            const precioLimpio = item.precio.replace('$', '').trim();
            const precioNumerico = parseFloat(precioLimpio.replace(',', ''));
            total += precioNumerico * item.cantidad;
        });
        return total.toFixed(2);
    };



    return (
        <>
            <Header />
            <div className="presupuesto-container">
                <h2 className="presupuesto-title">Presupuesto</h2>
                <ul className="presupuesto-list">
                    {PresupuestoItem.map(item => (
                        <li key={item.id} className="presupuesto-item">
                            <div className='container-card'>
                                <span className='nombre'>{item.nombre}</span>
                                <br />
                                <span className='cantidad'>Cantidad: {item.cantidad}</span>
                                <span className='precio'>ARS {item.precio}</span>
                                <button onClick={() => removeFromCart(item.id)}>
                                    <FontAwesomeIcon icon={faTrash} className="trash-icon" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="total-container">
                    <h2 className='totalP'>Total:</h2>
                    <h2 className='totalP'>ARS {calcularTotalPresupuesto()}</h2>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Presupuesto;




