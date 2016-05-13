import { TOGGLE_SIGNIN } from '../actions/types';

export default (state = false, action) => {
  console.log(state);
  switch(action.type){
    case (TOGGLE_SIGNIN):
      return action.payload;
    default:
      return state;
  }
};