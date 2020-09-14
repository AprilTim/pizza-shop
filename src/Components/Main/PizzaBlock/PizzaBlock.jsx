import React from "react";
import PizzaItem from "./PizzaItem";
import connect from "react-redux/lib/connect/connect";
import NavContainer from "../NavComtainer";


const PizzaBlock = (props) => {

    //Вынести в контейнерную компоненту логику и взаимодествие со state
    return (
        <div className="content">
            <NavContainer store={props.store}/>
            <div className="container">
                <h2>{props.main.selectedCategory} пиццы</h2>
                <div className="pizza_block">
                    {props.main.pizza.map((pizza) => <PizzaItem pizza={pizza}
                                                                setTypeDough={props.setTypeDough}
                                                                setSize={props.setSize}
                                                                sizeRange={props.main.sizeRange}
                                                                addToCart={props.addToCart}/>)}
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    main: state.main
})

export default connect(mapStateToProps, null)(PizzaBlock);