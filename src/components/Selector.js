import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from "@material-ui/core";
import axios from "axios";
import LineGraph from "./LineGraph";

const Selector = () => {
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState("")

    const handleChange = (e) => {
        const value = e.target.value
        setCountry(value)
    }
    
    const getCountries = () => {
        axios.get("https://covid19.mathdro.id/api/countries")
            .then(res => setCountries(res.data.countries))
            .catch(console.log)
    }

    useEffect(() => {
        getCountries()
    }, [])

    return (
        <FormControl style={{"width":"30%","marginBottom":"30px"}}>
            <h1>Covid Country Visualizer</h1>
            <NativeSelect onChange={(e) => handleChange(e)}>
                <option value="global">Select Country</option>
                {countries.map((country,i) => <option key={i} value={country.name}>{country.name}</option>)}
            </NativeSelect>
            <LineGraph country={country}/>
        </FormControl>
    )
}

export default Selector
