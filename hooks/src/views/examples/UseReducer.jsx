import React from 'react'
import { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'


const initialState = {
    cart: [],
    products: [],
    user: null,
    //foco...
    number: 0
}

//recebe o estado atual e o evolui
function reducer(state, action) {
    switch(action.type){
        case 'numberAdd2':
            return {...state, number: state.number + 2}
        case 'numberMultiply7':
            return {...state, number: state.number * 7}
        case 'numberDivide25':
            return {...state, number: state.number / 25}
        case 'numberInt':
            return {...state, number: parseInt(state.number)}
        case 'numberAddN':
            return {...state, number: state.number + parseInt(action.n)}
        case 'login':
            return {...state, user: {name: action.payload}}
        default:
            return state
    }
}

const UseReducer = (props) => {

    const[state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem usuário</span>}
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                    onClick={() => dispatch({type: 'login', payload: 'Melina'})}>Login</button>
                    <button className="btn"
                    onClick={() => dispatch({type: 'numberAdd2'})}>+2</button>
                    <button className="btn"
                    onClick={() => dispatch({type: 'numberAddN', n: '5'})}>+5</button>
                    <button className="btn"
                    onClick={() => dispatch({type: 'numberAddN', n: '-2'})}>-2</button>
                    <button className="btn"
                    onClick={() => dispatch({type: 'numberMultiply7'})}>*7</button>
                    <button className="btn"
                    onClick={() => dispatch({type: 'numberDivide25'})}>/25</button>
                    <button className="btn"
                    onClick={() => dispatch({type: 'numberInt'})}>Inteiro</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
