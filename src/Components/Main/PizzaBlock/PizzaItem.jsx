import React from "react";


const PizzaItem = (props) => {

    let {small,middle,big} = props.sizeRange

    return (
        <div className="pizza_item">
            <img
            src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"/>
            <h3>{props.pizza.name}</h3>
            <div className="pizza_item_settings">
                <ul>
                    <li onClick={() => props.setTypeDough(props.pizza.name,false)} className={`${!props.pizza.typeDough && "_active"}`}>Тонкое</li>
                    <li onClick={() => props.setTypeDough(props.pizza.name,true)} className={`${props.pizza.typeDough && "_active"}`}>Традиционное</li>
                </ul>
                <ul>
                    <li onClick={() => props.setSize(props.pizza.name,small)} className={`${(props.pizza.size == small) && "_active"}`}>{small} см.</li>
                    <li onClick={() => props.setSize(props.pizza.name,middle)} className={`${(props.pizza.size == middle) && "_active"}`}>{middle} см.</li>
                    <li onClick={() => props.setSize(props.pizza.name,big)} className={`${(props.pizza.size == big) && "_active"}`}>{big} см.</li>
                </ul>
            </div>
            <div className="pizza_item_footer">
                <b className="pizza_footer_price">от {props.pizza.price} Р</b>
                <button onClick={() => props.addToCart(props.pizza)} className="btn btn_addCart">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"

                        />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                </button>
            </div>
        </div>
    )
}

export default PizzaItem;