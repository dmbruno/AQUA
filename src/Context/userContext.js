import { Children, createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) =>{

    const [user, setUser] = useState({
        email: "diego@gmail.com",
        password: "123456"
    })

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}