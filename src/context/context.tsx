'use client'

import { createContext, ReactNode, useContext, useState } from "react";

interface ContextType {
    color: boolean,
    handleColor: () => void
}

const MyContext = createContext<ContextType | undefined>(undefined)

export function ContextProvider({ children }: { children: ReactNode }) {
    const [color, setColor] = useState(false)


    const handleColor = () => {
        setColor(!color)
    }

    return (
        <MyContext.Provider
            value={{
                color,
                handleColor
            }}>
            {children}
        </MyContext.Provider>
    );
}

export function useMyContext(): ContextType {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}
