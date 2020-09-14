const ADD_TO_CART = "ADD_TO_CART";


const initialState = {
    cart:[],
    totalCount: null,
    totalPrice: null,
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart,action.pizza],
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + action.pizza.price
            }
        default:
            return state
    }
}

export let addToCart = (pizza) => ({type:ADD_TO_CART,pizza})

export default CartReducer;
