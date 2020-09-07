import {combineReducers, createStore} from "redux";
import MainReducer from "./MainReducer";
import CartReducer from "./CartReducer";



let redusers = combineReducers(
    {main: MainReducer,
    cart: CartReducer}
)

let store = createStore(redusers)
window.store = store
export default store;