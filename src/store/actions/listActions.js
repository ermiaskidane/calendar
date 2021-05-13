

import axios from "axios"
import {
    LIST_EVENT_FAIL, 
    LIST_EVENT_REQUEST, 
    LIST_EVENT_SUCCESS, 
} from "../constants/listConstants"

export const listEv = (todo, dateCh) => async (dispatch) => {
    try {
        dispatch({
            type: LIST_EVENT_REQUEST,
        })

        const data = { todo, dateCh}
        console.log(data)
        // const { data } = await axios.post("/api/users/login", { email, password}, config)

        dispatch({
            type: LIST_EVENT_SUCCESS,
            payload: data,
        }) 
 
        localStorage.setItem("listofevents", JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: LIST_EVENT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}