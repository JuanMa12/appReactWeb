import axios from '../services/axios'

export const SHOW_PLANS = 'SHOW_PLANS'
export const VIEW_PLAN = 'VIEW_PLAN'

export const LOGIN_USER = 'LOGIN_USER'

export function showPlans() {

    return (dispatch, getState) => {
        axios.get('/plans')
        
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

export function login (user) {
  console.log(user)
  return (dispatch, getState) => {
    axios.post('/login', user)
    .then(response => {
      console.log(response.data)
      dispatch( { type: LOGIN_USER, payload: response.data } )
      localStorage.token = response.data.auth.token
      axios.defaults.headers.bearer = response.data.auth.token
      //resolve(response.data.auth.user)
    })
    .catch(error => {
      console.log('error in login')
      //reject(error)
    })
  }
}
