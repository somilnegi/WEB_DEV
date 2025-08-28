import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {

    const phone = "+91 4590871391"
    const email = "example@gmail.com"

    return (
        <AppContext.Provider value={{phone, email}}>
            {
                props.children
            }
        </AppContext.Provider>
    )
}

export default ContextProvider