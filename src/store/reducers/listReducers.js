import {
    LIST_EVENT_FAIL, 
    LIST_EVENT_REQUEST, 
    LIST_EVENT_SUCCESS,
} from "../constants/listConstants" 
 
export const listEventReducer = (state = {}, action) => {
    switch(action.type){
        case LIST_EVENT_REQUEST:
            return { loading: true } 
        case LIST_EVENT_SUCCESS:
            return { loading: false, listInfo: action.payload }
        case LIST_EVENT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}