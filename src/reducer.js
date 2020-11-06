import axios from "axios";


ACTIONS = {
    GET_DATA: "GET_DATA"
}


const Reducer = (state,action) => {
    switch(action.type){
        case GET_DATA:
            return axios.get(`https://covid19.mathdro.id/api`)
            .then(res => setdata(res.data))
        default:
            return state
    }
}

export default Reducer;