import React , { createContext, useState } from "react";

export const applicationModeContext =  createContext()

export const ApplicationModeContextProvider = ({ children })=>{

    const [ mode , setMode ] = useState(null)
    const handlAplicationMode = (e)=>{
        const val = e.target.value
        
        if( val=== 'Light Mode'){
            setMode('light')
        }else if( val === '"Dark Mode'){
            setMode('dark')
        }

    }

    return <applicationModeContext.Provider value={{mode , handlAplicationMode}}>
        { children }
    </applicationModeContext.Provider>

}