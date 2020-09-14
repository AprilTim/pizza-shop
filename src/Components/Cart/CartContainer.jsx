import React from "react";
import connect from "react-redux/lib/connect/connect";
import Cart from "./Cart";

const CartContainer = (props) => {



    return (
        <Cart {...props}/>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps,null)(CartContainer);