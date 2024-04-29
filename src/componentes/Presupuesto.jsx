import React, { useContext } from 'react';
import { PresupuestoContext } from '../Context/PresupuestoContext';
import './Presupuesto.css'; // Importa el archivo CSS de estilos

const Presupuesto = () => {
    const { PresupuestoItem } = useContext(PresupuestoContext);

    return (
        <div className="presupuesto-container"> {/* Aplica la clase del contenedor */}
            <h2 className="presupuesto-title">Presupuesto</h2> {/* Aplica la clase del título */}
            <ul className="presupuesto-list"> {/* Aplica la clase de la lista */}
                {PresupuestoItem.map(item => (
                    <li key={item.id} className="presupuesto-item"> {/* Aplica la clase del elemento de la lista */}
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
    );
};

export default Presupuesto;



