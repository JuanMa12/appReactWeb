import axios from '../services/axios'

export const SHOW_PLANS = 'SHOW_PLANS'

export function showPlans() {

    return (dispatch, getState) => {
        axios.get('/v1/plans')
            .then((response) => {
              console.log(response.data)
                dispatch( { type: SHOW_PLANS, payload: response.data } )
            })
    }

}
