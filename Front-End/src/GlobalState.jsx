import React, {createContext} from "react";
import FuncionarioAPI from "../services/FuncionarioAPI";

export const GlobalState = createContext();

export const DataProvider = ({children}) =>{

    const state = {
        funcionariosAPI: FuncionarioAPI(),
    };
    
    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}