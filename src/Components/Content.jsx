import React from "react";
import PizzaItem from "./PizzaItem";
import connect from "react-redux/lib/connect/connect";
import Nav from "./Nav";


const Content = (props) => {
    return (
        <div className="content">
            <Nav store={props.store}/>
            <div className="container">
                <h2>Все пиццы</h2>
                <div className="pizza_block">
                    {props.main.pizza.map((pizza) => <PizzaItem name={pizza.name}/>)}
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    main: state.main
})

export default connect(mapStateToProps,null)(Content);