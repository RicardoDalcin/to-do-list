import React, { useState } from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { authenticate, clearAuthError } from '../actions'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Feather } from '@expo/vector-icons'
import Link from '../components/Link'

const SigninScreen = ({ dispatch, auth }) => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	return (
		<>
			<NavigationEvents onWillFocus={() => dispatch(clearAuthError())} />
			<Spacer>
				<Text h3 style={styles.title}>
					Sign In
				</Text>
			</Spacer>
			<Spacer>
				<Input
					value={login}
					onChangeText={setLogin}
					label='Email/username'
					style={styles.input}
					leftIcon={<Feather style={styles.icon} name='mail' />}
					keyboardType='email-address'
					autoCapitalize='none'
					autoCorrect={false}
				/>
			</Spacer>
			<Spacer>
				<Input
					value={password}
					onChangeText={setPassword}
					label='Password'
					style={styles.input}
					leftIcon={<Feather style={styles.icon} name='lock' />}
					autoCapitalize='none'
					autoCorrect={false}
					secureTextEntry
				/>
			</Spacer>
			{auth.error ? (
				<Text style={styles.errorMessage}>{auth.error}</Text>
			) : null}
			<Spacer>
				<Button
					title='Sign in'
					style={styles.button}
					onPress={() => dispatch(authenticate({ login, password }))}
				/>
			</Spacer>
			<Link text='Have no account created? Sign up here!' routeName='Signup' />
		</>
	)
}

const styles = StyleSheet.create({
	title: {
		textAlign: 'center',
		color: '#262626'
	},
	icon: {
		fontSize: 20,
		marginRight: 10,
		color: '#86939e'
	},
	input: {
		paddingHorizontal: 10
	},
	button: {},
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 200
	},
	errorMessage: {
		fontSize: 16,
		color: '#ed4337',
		marginLeft: 15
	}
})

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(SigninScreen)
