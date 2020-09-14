import React from "react";
import cartEmpty from "../../assets/img/empty-cart.png";
import {NavLink} from "react-router-dom";
import CartItem from "./CartItem";

const Cart = (props) => {
    return (
        <div className="cart">
            <div className="container">
                {props.cart.cart.length <= 0 ? <div className="cart_empty">
                    <h2>Корзина пустая <icon>😕</icon></h2>
                    <p>Вероятней всего, вы не заказывали ещё пиццу.<br/>
                        Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                    <img src={cartEmpty}/>
                    <NavLink to="/" className="btn btn_black">Вернуться назад</NavLink>
                </div>
                :<div className="cartFull">
                    <div className="cartFull_header">
                        <h2>Корзина</h2>
                        <button className="btn">Очистить корзину</button>
                    </div>
                    {props.cart.cart.map((pizza) => <CartItem pizza={pizza}/>)}

                    <div className="cartFull_footer">
                        <div className="cartFull_footer_top">
                            <p>Всего пицц: <b>{props.cart.totalCount}</b></p>
                            <p>Сумма заказа <span>{props.cart.totalPrice}</span></p>
                        </div>
                        <div className="cartFull_footer_bottom">
                            <NavLink to="/" className="btn btn_black">Вернуться назад</NavLink>
                            <button className="btn btn_cart">Оплатить сейчас</button>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Cart;