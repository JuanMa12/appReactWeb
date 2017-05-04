import axios from '../services/axios'

export const SHOW_PLANS = 'SHOW_PLANS'
export const VIEW_PLAN = 'VIEW_PLAN'
export const LOGIN_USER = 'LOGIN_USER'

export function showPlans() {

    return (dispatch, getState) => {
        axios.get('/v1/plans')
            .then((response) => {
              console.log(response.data)
                dispatch( { type: SHOW_PLANS, payload: response.data } )
            })
    }

}

export function viewPlan() {

    return (dispatch, getState) => {
        axios.get('/v1/plans')
            .then((response) => {
              console.log(response.data)
                dispatch( { type: VIEW_PLAN, payload: response.data } )
            })
    }

}

export function login(props) {

    return (dispatch, getState) => {
        axios.post('/v1/login', props)
            .then((response) => {
              console.log(response.data)
                dispatch( { type: LOGIN_USER, payload: response.data } )
            })
    }

}
