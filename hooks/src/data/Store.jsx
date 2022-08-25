import React from 'react';
import { useState } from 'react';


const initialState = {
    number: 1234,
    text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState)

const Store = props => {

    const [state, setState] = useState(initialState)

    function updateState(key, value) {
        setState({
            ...state,//operador Spread: replica o estado atual, tem todo o Objeto que representa o estado atual (o objeto é replicado dentro de outro objeto)
            [key]: value
        })
    }

    //Contexto da Aplicação, com funções individuais que atualizam cada atributo individualmente
    return(
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: t => updateState('text', t), 
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store