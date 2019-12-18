import {
	AUTHENTICATE_STARTED,
	AUTHENTICATE_SUCCESS,
	SIGNOUT,
	ADD_AUTH_ERROR,
	CLEAR_AUTH_ERROR
} from '../actions/actionTypes'

const initialState = {
	loading: false,
	token: null,
	error: null
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTHENTICATE_STARTED:
			return {
				...state,
				loading: true
			}
		case AUTHENTICATE_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				token: action.payload
			}
		case SIGNOUT:
			return {
				...state,
				token: null
			}
		case ADD_AUTH_ERROR:
			return {
				...state,
				error: action.payload
			}
		case CLEAR_AUTH_ERROR:
			return {
				...state,
				error: null
			}
		default:
			return state
	}
}

export default authReducer
