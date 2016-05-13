import {TOGGLE_SIGNIN} from './types';

export function authenticate(isLoggedIn) {
  return {
    type: TOGGLE_SIGNIN,
    payload: isLoggedIn
  }
};