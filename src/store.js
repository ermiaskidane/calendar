import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import {  
    listEventReducer, 
} from "./store/reducers/listReducers"

const reducer = combineReducers({
    listEvent: listEventReducer, 
})

const listInfoFromStorage = localStorage.getItem("listInfo") ? 
    JSON.parse(localStorage.getItem("listInfo")) : null


const initialState = {
    listEvent: { listInfo: listInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
