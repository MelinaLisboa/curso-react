import React from 'react'
import { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

/**useReducer() usado em telas mais complexas, que possuem várias funcionalidades. Ou também o utiliza em um contexto mais global da aplicação
 * 
 * useReducer() é uma alternativa ao useState(), que é usado em objetos mais simples, valores primitivos (números e strings, por exemplo, e quando se tem um objeto mais complexo, com várias formas diferentes de manter o estado, é melhor usar o useReducer() e o estado da aplicação pode ser organizado de uma forma mais complexa, mas que traga também uma simplicidade de manutenção)
*/

import {initialState, reducer} from  '../../store'; //organização do projeto
import { numberAdd2, login } from '../../store/actions';

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
                    onClick={() => login(dispatch, 'Melina')}>Login</button>
                    <button className="btn"
                    onClick={() => numberAdd2(dispatch)}>+2</button>
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
