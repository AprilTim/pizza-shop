import React from "react";
import cartEmpty from "../assets/img/empty-cart.png";
import {NavLink} from "react-router-dom";

const Cart = (props) => {
    return (
        <div className="cart">
            <div className="container">
                <div className="cart_empty">
                    <h2>Корзина пустая <icon>😕</icon></h2>
                    <p>Вероятней всего, вы не заказывали ещё пиццу.<br/>
                        Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                    <img src={cartEmpty}/>
                    <NavLink to="/" className="btn btn_black">Вернуться назад</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Cart;