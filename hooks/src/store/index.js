import reducer  from './reducers/index'

const initialState = {
    cart: [],
    products: [],
    user: null,
    //foco...
    number: 0
}

export {
    initialState,
    reducer,
}