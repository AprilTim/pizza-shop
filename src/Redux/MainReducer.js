


const initialState = {
    categories: ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрыте",],
    pizza: [
        {
            name: "Чизбургер-пицца",
            category: null,
            typeDough: false,
            size: null,
        },
        {
            name: "Сырная",
            category: null,
            typeDough: false,
            size: null,
        },
        {
            name: "Креветки по-азиатски",
            category: null,
            typeDough: false,
            size: null,
        },
    ]
}

const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default MainReducer;
