// Pantalla de Inicio
import React from 'react';
import './Inicio.css'
import { Link } from 'react-router-dom';

const Inicio = () => {

    return (
        <div className="inicio-container">
            <h1 className="titulo">Presupuestos de Riego y Paisajismo</h1>
            <p className="descripcion">
                Bienvenido a nuestra aplicación. Aquí puedes generar presupuestos para proyectos de riego por aspersión y diseño de paisajes.
            </p>
            <Link to="/insumos">
                <button className="boton-presupuestar">Presupuestar</button>
            </Link>
        </div>
    );
};

export default Inicio;
