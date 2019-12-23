import { combineReducers } from 'redux'
import projects from './projectReducer'
import tasks from './taskReducer'
import auth from './authReducer'

export default combineReducers({
	projects,
	tasks,
	auth
})
