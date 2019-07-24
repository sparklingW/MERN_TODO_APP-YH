import axios from 'axios';
import { newUserSuccess,
	newUserError, onUserLoginSuccess, onUserLogOutSuccess, onUserInfoSuccess, onUserLoginError, triggerLogin, onUserLogin } from '../actions/users';
import { takeLatest, call, put } from 'redux-saga/effects';
import history from "../history";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function createUserApi(data) {
	return axios.post(
		'http://localhost:3001/users/register',
		data
	);
}

function loginUserApi(data) {
	return axios.post(
		'http://localhost:3001/users/login',
		data
	)
}

function userLogoutAPI() {
	return axios.post(
		'http://localhost:3001/users/logout'
	)
}

function userInfoAPI() {
	const token = localStorage.getItem('token');
	return axios.get(
		'http://localhost:3001/users/info',
		{headers: {'x-auth-token': token}}
	)
}

function* userInfo() {
	try {
		let info = yield call(userInfoAPI);
		console.log(info);
		yield put(onUserInfoSuccess(info.data))
	} catch (e) {

	}
}

function* userOut() {
	try {
		const data = yield call(userLogoutAPI);
		console.log(data);
		localStorage.removeItem('token');
		localStorage.removeItem('owner');
		history.push('/');
		yield put(onUserLogOutSuccess());
	} catch (e) {

	}
}

function* getUser({name, email, password, requestNewError}) {
	try {
		const user = {
			name,
			email,
			password,
		};
		const { data } = yield call(createUserApi, user);
		console.log(data);
		const userInfo = {
			id: data.id,
			name: data.name,
		};
		console.log(userInfo);
		yield put(newUserSuccess(userInfo));
		yield history.push('/');
	} catch (e) {
		console.log(e.message);
		yield put(newUserError({
			requestNewError
		}));
	}
}

function* userLogin({email, password}) {
	console.log('TEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEETH');
	try {
		let compareUser = {
			email,
			password,
		};
		console.log(compareUser)
		let { data } = yield call(loginUserApi, compareUser);
		console.log('dddddddddddddddddddd',data);
		localStorage.setItem('token', data.token);
		localStorage.setItem('owner', data.find);
		const owner = localStorage.getItem('owner');
		const token = localStorage.getItem('token');

		let userInfo= {
			email,
			id: owner,
			token,
		};
		console.log(userInfo);
		yield put(onUserLoginSuccess(userInfo));
		yield history.push('/events/show');
	} catch (e) {
		console.log('ERRRRRROR');
		yield put(onUserLoginError({
			requestError: true,
		}));
	}
}

export function* usersWatcher() {
	yield takeLatest('NEW_USER_REQUEST', getUser);
	yield takeLatest('ON_USER_LOGIN', userLogin);
	yield takeLatest('ON_USER_LOGOUT', userOut);
	yield takeLatest('ON_USER_INFO', userInfo);
}
