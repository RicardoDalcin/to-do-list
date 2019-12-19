import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	ScrollView
} from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Header } from 'react-navigation-stack'
import { register, clearAuthError } from '../actions'
import Link from '../components/Link'
import AuthForm from '../components/AuthForm'

const SignupScreen = ({ dispatch, auth }) => {
	return (
		<KeyboardAvoidingView
			keyboardVerticalOffset={Header.HEIGHT + 30}
			style={{ flex: 1 }}
			behavior={Platform.select({ ios: 'padding', android: null })}
		>
			<ScrollView>
				<NavigationEvents onWillFocus={() => dispatch(clearAuthError())} />
				<AuthForm
					headerText='Register'
					onSubmit={register}
					submitButtonText='Register'
					error={auth.error}
					formType='register'
					dispatch={dispatch}
				/>
				<Link
					text='Already have an account? Sign in here!'
					routeName='Signin'
				/>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({})

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(SignupScreen)
