import {
	ADD_PROJECT_STARTED,
	ADD_PROJECT_SUCCESS,
	ADD_PROJECT_FAILURE,
	FETCH_PROJECTS_STARTED,
	FETCH_PROJECTS_SUCCESS,
	FETCH_PROJECTS_FAILURE
} from '../actions/actionTypes'

const initialState = {
	loading: false,
	projects: [],
	error: null
}

const projectReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PROJECTS_STARTED:
			return {
				...state,
				loading: true
			}
		case FETCH_PROJECTS_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				projects: action.payload.projects
			}
		case FETCH_PROJECTS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error
			}
		case ADD_PROJECT_STARTED:
			return {
				...state,
				loading: true
			}
		case ADD_PROJECT_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				projects: [...state.projects, action.payload]
			}
		case ADD_PROJECT_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error
			}
		default:
			return state
	}
}

export default projectReducer
