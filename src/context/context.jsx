import { createContext, useEffect } from "react";
import data from "./data.js"

const weatherContext = createContext();

const weatherContextProvider = (propes) => {

    (async function (params) {
        const result = await data("kolkata");
        console.log(result)
    })();

    const value = {
        
    }


    return(
        <weatherContext.Provider value={value} >
            {propes.children}
        </weatherContext.Provider>
    )

}

export default weatherContextProvider