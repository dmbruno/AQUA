import React, { useContext } from 'react';
import { PresupuestoContext } from '../Context/PresupuestoContext';
import './Presupuesto.css'; // Importa el archivo CSS de estilos
import Header from './Header';
import Footer from './Footer/Footer';

const Presupuesto = () => {
    const { PresupuestoItem } = useContext(PresupuestoContext);

    const calcularTotal = (item) =>{
        return item.precio * item.cantidad;

    }

    return (

        <>
        <Header/>
            <div className="presupuesto-container"> 
                <h2 className="presupuesto-title">Presupuesto</h2> 
                <ul className="presupuesto-list"> 
                    {PresupuestoItem.map(item => (
                        <li key={item.id} className="presupuesto-item"> 
                            <div>
                                <span>{item.nombre}</span>
                                <br />
                                <span>Cantidad: {item.cantidad}</span>
                                <span>Precio: {item.precio}</span>
                            </div>
                            
                        </li>
                    ))}
                </ul>
            </div>
            <Footer/>
        </>
    );
};

export default Presupuesto;



