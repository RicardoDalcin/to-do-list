import {
	COMPLETE_TASK_STARTED,
	COMPLETE_TASK_SUCCESS,
	COMPLETE_TASK_FAILURE,
	ADD_TASK_STARTED,
	ADD_TASK_SUCCESS,
	ADD_TASK_FAILURE,
	FETCH_TASKS_STARTED,
	FETCH_TASKS_SUCCESS,
	FETCH_TASKS_FAILURE
} from '../actions/actionTypes'

const initialState = {
	loading: false,
	tasks: [],
	error: null
}

const taskReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TASKS_STARTED:
			return {
				...state,
				loading: true
			}
		case FETCH_TASKS_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				tasks: action.payload.tasks
			}
		case FETCH_TASKS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error
			}
		case ADD_TASK_STARTED:
			return {
				...state,
				loading: true
			}
		case ADD_TASK_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				tasks: [...state.tasks, action.payload]
			}
		case ADD_TASK_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error
			}
		case COMPLETE_TASK_STARTED:
			return {
				...state,
				loading: true
			}
		case COMPLETE_TASK_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				tasks: state.tasks.filter(task => task._id !== action.payload._id)
			}
		case COMPLETE_TASK_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error
			}
		default:
			return state
	}
}

export default taskReducer
