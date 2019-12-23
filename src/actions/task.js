import {
	COMPLETE_TASK_STARTED,
	COMPLETE_TASK_SUCCESS,
	COMPLETE_TASK_FAILURE,
	ADD_TASK_STARTED,
	ADD_TASK_SUCCESS,
	ADD_TASK_FAILURE,
	DELETE_TASK,
	FETCH_TASKS_STARTED,
	FETCH_TASKS_SUCCESS,
	FETCH_TASKS_FAILURE
} from './actionTypes'

import todoApi from '../api/todo'

export const fetchTasks = ({ projectId }) => {
	return (dispatch, getState) => {
		dispatch(fetchTasksStarted())
		todoApi
			.get(`/tasks/fetch/${projectId}`)
			.then(res => {
				dispatch(fetchTasksSuccess(res.data.tasks))
			})
			.catch(err => {
				dispatch(fetchTasksFailure(err.response.data.error))
			})
	}
}

const fetchTasksStarted = () => ({
	type: FETCH_TASKS_STARTED
})

const fetchTasksSuccess = tasks => ({
	type: FETCH_TASKS_SUCCESS,
	payload: { tasks }
})

const fetchTasksFailure = error => ({
	type: FETCH_TASKS_FAILURE,
	payload: {
		error
	}
})

export const addTask = ({ title, projectId }) => {
	return (dispatch, getState) => {
		dispatch(addTaskStarted())

		todoApi
			.post(`/tasks/${projectId}`, { title })
			.then(res => {
				dispatch(addTaskSuccess(res.data))
			})
			.catch(err => {
				console.log(err.message)
				dispatch(addTaskFailure(err.response.data.error))
			})
	}
}

const addTaskSuccess = task => ({
	type: ADD_TASK_SUCCESS,
	payload: {
		...task
	}
})

const addTaskStarted = () => ({
	type: ADD_TASK_STARTED
})

const addTaskFailure = error => ({
	type: ADD_TASK_FAILURE,
	payload: {
		error
	}
})

export const completeTask = ({ taskId }) => {
	return (dispatch, getState) => {
		dispatch(completeTaskStarted())

		todoApi
			.put(`/tasks/${taskId}`, { completed: true })
			.then(res => {
				dispatch(completeTaskSuccess(res.data))
			})
			.catch(err => {
				console.log(err.message)
				dispatch(completeTaskFailure(err.response.data.error))
			})
	}
}

const completeTaskSuccess = task => ({
	type: COMPLETE_TASK_SUCCESS,
	payload: {
		...task
	}
})

const completeTaskStarted = () => ({
	type: COMPLETE_TASK_STARTED
})

const completeTaskFailure = error => ({
	type: COMPLETE_TASK_FAILURE,
	payload: {
		error
	}
})
