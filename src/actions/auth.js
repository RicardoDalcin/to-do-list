import {
	AUTHENTICATE_STARTED,
	AUTHENTICATE_SUCCESS,
	SIGNOUT,
	ADD_AUTH_ERROR,
	CLEAR_AUTH_ERROR
} from '../actions/actionTypes'
import { navigate } from '../navigationRef'
import todoApi from '../api/todo'
import { AsyncStorage } from 'react-native'

export const authenticate = ({ login, password }) => {
	return (dispatch, getState) => {
		dispatch(authenticateStarted())
		todoApi
			.post('/auth/authenticate', { login, password })
			.then(async res => {
				await AsyncStorage.setItem('token', res.data.token)
				dispatch(authenticateSuccess(res.data.token))
				navigate('ProjectList')
			})
			.catch(err => {
				dispatch(authenticateFailure(err.response.data.error))
			})
	}
}

const authenticateSuccess = token => ({
	type: AUTHENTICATE_SUCCESS,
	payload: token
})

const authenticateStarted = () => ({
	type: AUTHENTICATE_STARTED
})

const authenticateFailure = error => ({
	type: ADD_AUTH_ERROR,
	payload: error
})

export const register = ({ username, name, email, password }) => {
	return (dispatch, getState) => {
		dispatch(authenticateStarted())

		todoApi
			.post('/auth/register', { username, name, email, password })
			.then(async res => {
				await AsyncStorage.setItem('token', res.data.token)
				dispatch(authenticateSuccess(res.data.token))
				navigate('ProjectList')
			})
			.catch(err => {
				dispatch(authenticateFailure(err.response.data.error))
			})
	}
}

export const tryLocalSignin = () => {
	return async (dispatch, getState) => {
		const token = await AsyncStorage.getItem('token')
		if (token) {
			dispatch(authenticateSuccess(token))
			navigate('ProjectList')
		} else {
			navigate('Signin')
		}
	}
}

export const signout = () => {
	return async dispatch => {
		await AsyncStorage.removeItem('token')
		dispatch(signoutSuccess())
		// navigate
	}
}

const signoutSuccess = () => ({
	type: SIGNOUT
})
