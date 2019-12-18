import {
	ADD_PROJECT_STARTED,
	ADD_PROJECT_SUCCESS,
	ADD_PROJECT_FAILURE,
	DELETE_PROJECT
} from './actionTypes'

import todoApi from '../api/todo'

export const addProject = ({ title, description }) => {
	return (dispatch, getState) => {
		dispatch(addProjectStarted())

		todoApi
			.post('/projects', { title, description })
			.then(res => {
				dispatch(addProjectSuccess(res.data))
			})
			.catch(err => {
				dispatch(addProjectFailure(err.response.data.error))
			})
	}
}

const addProjectSuccess = project => ({
	type: ADD_PROJECT_SUCCESS,
	payload: {
		...project
	}
})

const addProjectStarted = () => ({
	type: ADD_PROJECT_STARTED
})

const addProjectFailure = error => ({
	type: ADD_PROJECT_FAILURE,
	payload: {
		error
	}
})
