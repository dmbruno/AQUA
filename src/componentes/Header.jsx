import React, { useContext } from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { PresupuestoContext } from '../Context/PresupuestoContext';
import { Link } from 'react-router-dom';

const Header = () => {
    const { PresupuestoItem } = useContext(PresupuestoContext); 
    const itemCount = PresupuestoItem.reduce((total, item) => total + item.cantidad, 0);

    return (
        <header className="header-container">
            <div className="header-content">
                <nav className="header-nav">
                    <ul>
                    <li><Link to="/insumos">Inicio</Link></li>
                        
                    </ul>
                </nav>
                <Link to="/presupuesto" className="cart-container">
                    <FontAwesomeIcon icon={faBook} className="notebook-icon" />
                    <span className="item-count">{itemCount}</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;



