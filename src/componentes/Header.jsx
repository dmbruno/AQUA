import React, { useContext } from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { PresupuestoContext } from '../Context/PresupuestoContext';

const Header = () => {
    const { PresupuestoItem } = useContext(PresupuestoContext); // Cambia "item" a "PresupuestoItem"

    // Calcula la cantidad total de items sumando la cantidad de cada item en PresupuestoItem
    const itemCount = PresupuestoItem.reduce((total, item) => total + item.cantidad, 0);

    return (
        <header className="header-container">
            <div className="header-content">
                <nav className="header-nav">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Acerca de</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
                <div className="cart-container">
                    <FontAwesomeIcon icon={faBook} className="notebook-icon" />
                    <span className="item-count">{itemCount}</span>
                </div>
            </div>
        </header>
    );
};

export default Header;



