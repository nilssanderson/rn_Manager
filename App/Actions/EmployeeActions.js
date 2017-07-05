
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_DELETE_SUCCESS,
  EMPLOYEES_FETCH_SUCCESS,
} from './types';


export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  // console.log(name, phone, shift);

  return (dispatch) => { // using redux thunk to fake the no return
    // json datastore path e.g. /users/132r14513/employees
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.employeeList({ type: 'reset' });
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      // this is persistent, will always update from database
      .on('value', snapshot => { // snapshot: object that describes what data is in there
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => { // using redux thunk to fake the no return
    // json datastore path e.g. /users/132r14513/employees/12412412
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        Actions.employeeList({ type: 'reset' });
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => { // using redux thunk to fake the no return
    // json datastore path e.g. /users/132r14513/employees/12412412
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: EMPLOYEE_DELETE_SUCCESS });
        Actions.employeeList({ type: 'reset' });
      });
  };
};
