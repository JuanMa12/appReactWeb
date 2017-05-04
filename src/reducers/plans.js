import { SHOW_PLANS } from '../actions'

const initialState = {
    list: []
}

export function showPlans(state = initialState, action) {

    switch (action.type) {
        case SHOW_PLANS:
            return Object.assign({}, state, {list: action.payload})
        default:
            return state
    }

}
