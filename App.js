import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'
import thunk from 'redux-thunk'

import { setNavigator } from './src/navigationRef'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import ProjectListScreen from './src/screens/ProjectListScreen'
import ProjectDetailScreen from './src/screens/ProjectDetailScreen'
import LoadingScreen from './src/screens/LoadingScreen'
import ProjectCreateScreen from './src/screens/ProjectCreateScreen'
import SettingsScreen from './src/screens/SettingsScreen'
import TaskCreateScreen from './src/screens/TaskCreateScreen'

const store = createStore(rootReducer, applyMiddleware(thunk))

const switchNavigator = createSwitchNavigator({
	Loading: LoadingScreen,
	loginFlow: createStackNavigator({
		Signin: SigninScreen,
		Signup: SignupScreen
	}),
	mainFlow: createStackNavigator({
		ProjectList: ProjectListScreen,
		ProjectCreate: ProjectCreateScreen,
		ProjectDetail: ProjectDetailScreen,
		TaskCreate: TaskCreateScreen,
		Settings: SettingsScreen
	})
})

const App = createAppContainer(switchNavigator)

export default () => {
	return (
		<Provider store={store}>
			<App
				ref={navigator => {
					setNavigator(navigator)
				}}
			/>
		</Provider>
	)
}
