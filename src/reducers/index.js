import { combineReducers } from 'redux';

import authentication from './signin_reducer';

const rootReducer = combineReducers({
  authenticated: authentication
});

export default rootReducer;
