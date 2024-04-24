import React, { useState } from "react";
const PresupuestoContext = React.createContext();

const PresuProvider = ({children}) => {

    const [PresupuestoItem, SetPresupuestoItem] = useState([]);

    const addToCart = (item) => {
        SetPresupuestoItem([...PresupuestoItem, item]);
      };
    
      const removeFromCart = (itemId) => {
        SetPresupuestoItem(PresupuestoItem.filter(item => item.id !== itemId));
      };

      return (
        <PresupuestoContext.Provider value={{ addToCart, removeFromCart, PresupuestoItem }}>
          {children}
        </PresupuestoContext.Provider>
      );
 
}

export {PresupuestoContext, PresuProvider }