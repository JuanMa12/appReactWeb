import { combineReducers } from 'redux';
import { showPlans } from './plans'
import { login } from './sessions'

const rootReducer = combineReducers({
  plan: showPlans,
  user: login
});

export default rootReducer;
