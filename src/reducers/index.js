import { combineReducers } from 'redux';
import { showPlans } from './plans'

const rootReducer = combineReducers({
  plan: showPlans
});

export default rootReducer;
