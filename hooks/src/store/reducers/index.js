import  numberReducer from './number'
import  userReducer from './user'

//recebe o estado atual e o evolui
function reducer(state, action) {

    let newState = numberReducer(state, action)
    return userReducer(newState, action)
}

export default reducer