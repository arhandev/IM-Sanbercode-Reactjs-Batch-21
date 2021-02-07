import React, { useState, createContext } from "react";

export const UserContext = createContext();


export function UserProvider({children}) {
    const currentUser = JSON.parse(localStorage.getItem("Authorization"))
    const checkUser = currentUser ? currentUser : null
    const [user, setUser] = useState(checkUser);
  
    return (
        <div>
            <UserContext.Provider value={[user, setUser]}>
                {children}
            </UserContext.Provider>
        </div>
    )
}

