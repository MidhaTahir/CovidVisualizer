import React, { useContext,useEffect, useState } from 'react'
import { Context } from "../Context";
import MuiPaper from "./MuiPaper";

const Visual = () => {
    const [loading,setLoading] = useState(0);
    const { state,getData } = useContext(Context)

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {!loading && state.confirmed?.value && state.recovered?.value && state.deaths?.value &&
                <MuiPaper confirmed={ state.confirmed.value } recovered={ state.recovered.value } deaths={ state.deaths.value } />

            }
        </>
    )
}

export default Visual;
