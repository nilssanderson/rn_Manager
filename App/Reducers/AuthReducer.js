
// WARNING! no error will be thrown if the import is incorrect
// make sure to double check the spelling (better to copy and paste)!
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../Actions/types';


// by default use initial_state so that we never return undefined or null
const INITIAL_STATE = {
  email: '', // fill in with real values for development
  password: '', // fill in with real values for development
  user: null,
  error: '',
  loading: false
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      // make new object
      // take all of the properties on my existing state object and...
      // put them into the newly defined object
      // then define the property email and give it the property action.payload
      // and through it on top of the new object
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case LOGIN_USER:
      return { ...state, loading: true, error: '' };

    // using initial_state to clear all form values
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };

    case LOGIN_USER_FAIL:
      return { ...state,
        error: 'Authentication Failed.',
        password: '',
        loading: false
      };

    default:
      return state;
  }
};
