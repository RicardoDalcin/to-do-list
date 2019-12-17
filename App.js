import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import SigninScreen from "./src/screens/SigninScreen"
import SignupScreen from "./src/screens/SignupScreen"
import ProjectListScreen from "./src/screens/ProjectListScreen"
import ProjectDetailScreen from "./src/screens/ProjectDetailScreen"
import projectReducer from "./src/reducers/projectReducer"

const store = createStore(projectReducer)

const switchNavigator = createSwitchNavigator({
	loginFlow: createStackNavigator({
		Signin: SigninScreen,
		Signup: SignupScreen
	}),
	mainFlow: createStackNavigator({
		ProjectList: ProjectListScreen,
		ProjectDetail: ProjectDetailScreen
	})
})

const App = createAppContainer(switchNavigator)

export default () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
}
