import React from "react";
import connect from "react-redux/lib/connect/connect";
import PizzaBlock from "./PizzaBlock";
import {setSize, setTypeDough} from "../../../Redux/MainReducer";
import {addToCart} from "../../../Redux/CartReducer";


const PizzaBlockContainer = (props) => {
    //Вынести в контейнерную компоненту логику и взаимодествие со state
    return (
        <PizzaBlock {...props}/>
    )
}

let mapStateToProps = (state) => ({
    main: state.main
})

export default connect(mapStateToProps, {setTypeDough,setSize,addToCart})(PizzaBlockContainer);