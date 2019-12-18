import { combineReducers } from 'redux'
import projects from './projectReducer'
import auth from './authReducer'

export default combineReducers({
	projects,
	auth
})
