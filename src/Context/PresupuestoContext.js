import React, { useState } from "react";

const PresupuestoContext = React.createContext();

const PresuProvider = ({children}) => {

    const [PresupuestoItem, SetPresupuestoItem] = useState([]);

    const addToCart = (item) => {
        SetPresupuestoItem([...PresupuestoItem, item]);
    };
    
    const removeFromCart = (itemId) => {
        const updatedItems = PresupuestoItem.map(item => {
            if (item.id === itemId) {
                // Si la cantidad es mayor que 1, simplemente disminuye la cantidad
                if (item.cantidad > 1) {
                    return { ...item, cantidad: item.cantidad - 1 };
                } else {
                    // Si la cantidad es 1 y se elimina, elimina el producto completamente
                    return null;
                }
            } else {
                return item;
            }
        }).filter(item => item !== null); // Filtra los elementos eliminados completamente
        SetPresupuestoItem(updatedItems);
    };

    return (
        <PresupuestoContext.Provider value={{ addToCart, removeFromCart, PresupuestoItem }}>
          {children}
        </PresupuestoContext.Provider>
    );
}

export {PresupuestoContext, PresuProvider };
