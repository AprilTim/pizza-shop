import React from "react";
import "./App.scss"
import Content from "./Components/Content";
import Cart from "./Components/Cart";
import {Route} from "react-router-dom";
import HeaderWithRouter from "./Components/Header";

const App = (props) => {
    return(
        <div className="wrapper">
            <HeaderWithRouter/>
            <Route exact={true} path="/" render={() => <Content store={props.store}/>}/>
            <Route path="/cart" render={() => <Cart/>}/>
        </div>
    )
}



export default App;