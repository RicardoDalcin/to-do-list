import React, { useState } from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import { addProject, authenticate } from '../actions'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Feather } from '@expo/vector-icons'

const SigninScreen = ({ dispatch }) => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	return (
		<>
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
			{/* {errorMessage ? (
				<Text style={styles.errorMessage}>{errorMessage}</Text>
			) : null} */}
			<Spacer>
				<Button
					title='Sign in'
					style={styles.button}
					onPress={() => dispatch(authenticate({ login, password }))}
				/>
			</Spacer>
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

export default connect()(SigninScreen)
