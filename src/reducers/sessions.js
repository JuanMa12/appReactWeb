import { LOGIN_USER } from '../actions'

const initialState = {
    user: []
}

export function login(state = initialState, action) {

    switch (action.type) {
        case LOGIN_USER:
            return Object.assign({}, state, {user: action.payload})
        default:
            return state
    }

}
