import React from "react";

const CartItem = (props) => {
    return (
        <div className="cartFull_item">
            <div className="cartFull_item_description">
                <img
                    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"/>
                <div>
                    <h3>{props.pizza.name}</h3>
                    <p>{props.pizza.size}</p></div>
            </div>
            <div className="cartFull_item_count">
                <button className="btn btn_circle">-</button>
                <span>1</span>
                <button className="btn btn_circle">+</button>
            </div>
            <div className="cartFull_item_price">{props.pizza.price}</div>
            <button className="btn btn_circle">X</button>
        </div>

    )
}

export default CartItem;