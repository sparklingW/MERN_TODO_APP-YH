import {
  NEW_USER_REQUEST,
  ON_SUCCES_NEW_USER,
  ON_USER_LOGIN,
  ON_USER_LOGIN_SUCCESS,
  ON_USER_LOGIN_ERROR,
  ON_USER_LOGOUT,
  ON_USER_INFO,
  ON_USER_INFO_SUCCESS, ON_ERROR_NEW_USER
} from '../consts';

const initialState = {
  name: '',
  email: '',
  password: '',
  token: '',
  id: '',
  errorName: null,
  errorEmail: null,
  isNameEx : "",
  requestError: false,
  requestNewError: false,
};

export const newUserReducer = (state = initialState, action) => {
  const { type, name, email, password, id } = action;
  switch (type) {
    case NEW_USER_REQUEST:
      return {
        ...state,
        name,
        email,
        password,
        requestNewError: false
      };
    case ON_SUCCES_NEW_USER:
      return {
        ...state,
        id,
        name,
        requestNewError: false
      };
    case ON_ERROR_NEW_USER:
      return {
        ...state,
        email,
        requestNewError: true
      };
    case ON_USER_LOGOUT:
      return {
        ...state,
      };
    case ON_USER_INFO:
      return {
        ...state,
        name,
        email
      };
    case ON_USER_INFO_SUCCESS:
      return {
        ...state,
        name,
        email
      };
    default:
      return state;
  }
};

export const userLoginReducer = (state = initialState, action) => {
  const { type, email, password, id, token } = action;
  switch (type) {
    // case ON_USER_LOGIN:
    //   return {
    //     ...state,
    //     email,
    //   };
    case ON_USER_LOGIN_SUCCESS:
      return {
        ...state,
        id,
        token,
        email,
        requestError: false,
      };
    case ON_USER_LOGIN_ERROR:
      return {
        ...state,
        requestError: true,
      };
    default:
      return state;
  }
};
