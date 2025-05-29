import { createContext } from "react";

interface StoreContextProviderProps{
    children:React.ReactNode
}

export const StoreContext = createContext(null)

const StoreContextProvider:React.FC<StoreContextProviderProps> = ({children}) => {
    const contextValue = {

    }

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;