import React,{ createContext, useState } from "react";
import axios from "axios";

export const Context = createContext(0)

const ContextProvider = ({ children }) => {
    const [state,setState] = useState(0)
    const [individual,setIndividual] = useState(0)

    const getData = () => {
        return axios.get("https://covid19.mathdro.id/api")
            .then(res => setState(res.data))
            .catch(console.log)
    }

    const getCountry = (country) => {
        return axios.get(`https://covid19.mathdro.id/api/countries/${country}`)
            .then(res => setIndividual(res.data))
            .catch(console.log)
    }

    const value = { state, individual, getData, getCountry }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider



