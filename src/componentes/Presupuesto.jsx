import React, { useContext } from 'react';
import { PresupuestoContext } from '../Context/PresupuestoContext';
import './Presupuesto.css'; // Importa el archivo CSS de estilos
import Header from './Header';
import Footer from './Footer/Footer';

const Presupuesto = () => {
    const { PresupuestoItem } = useContext(PresupuestoContext);
    console.log("Datos del Presupuesto:", PresupuestoItem);

    const calcularTotalPresupuesto = () => {
        let total = 0;
        PresupuestoItem.forEach(item => {
            
            const precioLimpio = item.precio.replace('$', '').trim();
            const precioNumerico = parseFloat(precioLimpio.replace(',', ''));
            total += precioNumerico * item.cantidad;
        });
        return total.toFixed(2);
    };
    
    

    console.log("Total del presupuesto:", calcularTotalPresupuesto());

    return (
        <>
            <Header/>
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
                                
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="total-container">
                    <h2 className='totalP'>Total:</h2>
                    <h2 className='totalP'>ARS {calcularTotalPresupuesto()}</h2>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Presupuesto;




