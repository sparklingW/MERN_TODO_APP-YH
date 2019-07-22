import {
  NEW_USER_REQUEST,
  ON_SUCCES_NEW_USER,
  ON_ERROR_NEW_USER,
  ON_USER_LOGIN,
  ON_USER_LOGIN_SUCCESS,
  ON_USER_LOGIN_ERROR,
  ON_USER_LOGOUT,
  ON_USER_LOGOUT_SUCCESS,
  ON_USER_INFO,
  ON_USER_INFO_SUCCESS,
	ON_LOGIN
} from '../consts';

export const newUserReq = ({ name, email, password }) => ({
  type: NEW_USER_REQUEST,
  name,
  email,
  password
});

export const newUserSuccess = ({ id, name, requestNewError }) => ({
  type: ON_SUCCES_NEW_USER,
  id,
  name,
  requestNewError
});

export const newUserError = ({ requestNewError }) => ({
  type: ON_ERROR_NEW_USER,
  requestNewError
});

export const triggerLogin = () => ({
	type: ON_LOGIN,
});

export const onUserLogin = ({email, password}) => ({
  type: ON_USER_LOGIN,
  email,
  password,
});

export const onUserLoginError = ({requestError}) => ({
  type: ON_USER_LOGIN_ERROR,
  requestError,
});

export const onUserLoginSuccess = ({id, token, requestError}) => ({
  type: ON_USER_LOGIN_SUCCESS,
  id,
  token,
  requestError
});

export const onUserLogOut = (  ) => ({
  type: ON_USER_LOGOUT
});

export const onUserLogOutSuccess = (  ) => ({
  type: ON_USER_LOGIN_SUCCESS
});

export const onUserInfo = ({name,email}) => ({
  type: ON_USER_INFO,
  name,
  email
});

export const onUserInfoSuccess = ({name,email}) => ({
  type: ON_USER_INFO_SUCCESS,
  name,
  email
});
