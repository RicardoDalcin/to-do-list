import {
	ADD_PROJECT_STARTED,
	ADD_PROJECT_SUCCESS,
	ADD_PROJECT_FAILURE,
	DELETE_PROJECT,
	FETCH_PROJECTS_STARTED,
	FETCH_PROJECTS_SUCCESS,
	FETCH_PROJECTS_FAILURE
} from './actionTypes'

import todoApi from '../api/todo'

export const fetchProjects = () => {
	return (dispatch, getState) => {
		dispatch(fetchProjectsStarted())
		todoApi
			.get('/projects')
			.then(res => {
				dispatch(fetchProjectsSuccess(res.data.projects))
			})
			.catch(err => {
				dispatch(fetchProjectsFailure(err.response.data.error))
			})
	}
}

export const addProject = ({ title, description, color }) => {
	return (dispatch, getState) => {
		dispatch(addProjectStarted())

		todoApi
			.post('/projects', { title, description, color })
			.then(res => {
				dispatch(addProjectSuccess(res.data))
			})
			.catch(err => {
				dispatch(addProjectFailure(err.response.data.error))
			})
	}
}

const fetchProjectsStarted = () => ({
	type: FETCH_PROJECTS_STARTED
})

const fetchProjectsSuccess = projects => ({
	type: FETCH_PROJECTS_SUCCESS,
	payload: { projects }
})

const fetchProjectsFailure = error => ({
	type: FETCH_PROJECTS_FAILURE,
	payload: {
		error
	}
})

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
