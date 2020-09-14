import React from "react";
import "./App.scss"
import PizzaBlockContainer from "./Components/Main/PizzaBlock/PizzaBlockContainer";
import CartContainer from "./Components/Cart/CartContainer";
import {Route} from "react-router-dom";
import HeaderWithRouter from "./Components/Header";

const App = (props) => {
    return(
        <div className="wrapper">
            <HeaderWithRouter/>
            <Route exact={true}
                   path="/"
                   render={() => <PizzaBlockContainer store={props.store}/>}/>
            <Route path="/cart" render={() => <CartContainer store={props.store}/>}/>
        </div>
    )
}



export default App;