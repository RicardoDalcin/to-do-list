import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Header } from 'react-navigation-stack'
import { authenticate, clearAuthError } from '../actions'
import Link from '../components/Link'
import AuthForm from '../components/AuthForm'
import { ScrollView } from 'react-native-gesture-handler'

const SigninScreen = ({ dispatch, auth }) => {
	return (
		<KeyboardAvoidingView
			keyboardVerticalOffset={Header.HEIGHT + 30}
			style={{ flex: 1 }}
			behavior={Platform.select({ ios: 'padding', android: null })}
		>
			<ScrollView>
				<NavigationEvents onWillFocus={() => dispatch(clearAuthError())} />
				<AuthForm
					headerText='Sign In'
					onSubmit={authenticate}
					submitButtonText='Sign in'
					error={auth.error}
					formType='login'
					dispatch={dispatch}
				/>
				<Link
					text='Have no account created? Sign up here!'
					routeName='Signup'
				/>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({})

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(SigninScreen)
