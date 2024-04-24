import React, { useContext } from 'react';
import { PresupuestoContext } from '../Context/PresupuestoContext';

const Presupuesto = () => {
    const { PresupuestoItem } = useContext(PresupuestoContext);

    return (
        <div>
            <h2>Presupuesto</h2>
            <ul>
                {PresupuestoItem.map(item => (
                    <li key={item.id}>
                        <div>
                            <span>{item.nombre}</span>
                            <span>Cantidad: {item.cantidad}</span>
                            <span>Precio: ${item.precio}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Presupuesto;


