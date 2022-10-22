import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
}

//Método anterior
// export const add = (description) => {
//     const request = axios.post(URL, { description })//retorna uma promise
//     return [
//         { type: 'TODO_ADDED', payload: request }, //action
//         search() //action
//     ]
// }

//desta forma só chama o search depois que o post for feito
export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

//nos exemplos abaixo, exceto clear, não foram criadas ações (ex de MARKED_AS_CHANGE, MARKED_AS_PENDING, REMOVED), mas caso seja necessário, pode criar (Penso que é pq o search chamado por último já gera impacto na interface gráfica)
export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(resp => dispatch(search()))
    }
}

//retorna uma função que recebe como parâmetro um dispatch
export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
}