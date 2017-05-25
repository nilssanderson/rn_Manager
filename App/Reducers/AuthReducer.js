
// WARNING! no error will be thrown if the import is incorrect
// make sure to double check the spelling (better to copy and paste)!
import { EMAIL_CHANGED } from '../Actions/types';


// by default use initial_state so that we never return undefined or null
const INITIAL_STATE = { email: '' };


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return '';

    default:
      return state;
  }
};
