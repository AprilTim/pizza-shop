const SET_CATEGORY = "SET_CATEGORY";
const TYPE_DOUGH = "TYPE_DOUGH";
const SET_SIZE = "SET_SIZE";

const initialState = {
    categories: ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрыте",],
    selectedCategory: "Все",
    sizeRange: {
        small: 26,
        middle: 30,
        big: 40,
    },
    pizza: [
        {
            name: "Чизбургер-пицца",
            category: "Мясные",
            typeDough: false,
            size: 26,
            price: 395,
            count: null,
        },
        {
            name: "Сырная",
            category: "Вегетарианские",
            typeDough: false,
            size: 26,
            price: 450,
            count: null,
        },
        {
            name: "Креветки по-азиатски",
            category: "Острые",
            typeDough: false,
            size: 26,
            price: 290,
            count: null,
        },
    ]
}

const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                selectedCategory: action.category,
                pizza:state.pizza.filter((pizza) => pizza.category == action.category)
            }
        case TYPE_DOUGH:
            return {
                ...state,
                pizza: state.pizza.map((pizza) => {
                   return action.payload.name == pizza.name ?
                       {...pizza, typeDough: action.payload.typeDough}
                   : pizza
                })
            }
        case SET_SIZE:
            return {
                ...state,
                pizza: state.pizza.map((pizza) => {
                    return action.payload.name == pizza.name ?
                        {...pizza, size: action.payload.size}
                        : pizza
                })
            }
        default:
            return state
    }
}

export let setCategory = (category) => ({type:SET_CATEGORY,category})
export let setTypeDough = (name,typeDough) => ({type:TYPE_DOUGH,payload:{name,typeDough}})
export let setSize = (name,size) => ({type:SET_SIZE,payload:{name,size}})

export default MainReducer;
