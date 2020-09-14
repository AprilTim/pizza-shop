import React from "react";
import connect from "react-redux/lib/connect/connect";
import Nav from "./Nav";
import {setCategory} from "../../Redux/MainReducer";


const NavContainer = (props) => {
    //Вынести в контейнерную компоненту логику и взаимодествие со state

    /*let setCategory = (category) => {

    }*/

    return(
            <Nav {...props} />
    )
}

let mapStateToProps = (state) => ({
    main: state.main,
})

/*let mapDispatchToProps = (dispatch) => ({
    setCategory: setCategory(dispatch),
})*/

export default connect(mapStateToProps, {setCategory})(NavContainer);