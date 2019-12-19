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
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Feather } from '@expo/vector-icons'
import Link from '../components/Link'

const SignupScreen = ({ dispatch, auth }) => {
	const [name, setName] = useState('')
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<KeyboardAvoidingView
			keyboardVerticalOffset={Header.HEIGHT + 30}
			style={{ flex: 1 }}
			behavior={Platform.select({ ios: 'padding', android: null })}
		>
			<ScrollView>
				<NavigationEvents onWillFocus={() => dispatch(clearAuthError())} />
				<Spacer>
					<Text h3 style={styles.title}>
						Register
					</Text>
				</Spacer>
				<Spacer>
					<Input
						value={name}
						onChangeText={setName}
						label='Name'
						style={styles.input}
						leftIcon={<Feather style={styles.icon} name='user' />}
					/>
				</Spacer>
				<Spacer>
					<Input
						value={email}
						onChangeText={setEmail}
						label='Email'
						style={styles.input}
						leftIcon={<Feather style={styles.icon} name='mail' />}
						keyboardType='email-address'
						autoCapitalize='none'
						autoCorrect={false}
					/>
				</Spacer>
				<Spacer>
					<Input
						value={username}
						onChangeText={setUsername}
						label='Username'
						style={styles.input}
						leftIcon={<Feather style={styles.icon} name='user' />}
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
						title='Sign up'
						style={styles.button}
						onPress={() =>
							dispatch(register({ name, username, email, password }))
						}
					/>
				</Spacer>
				<Link
					text='Already have an account? Sign in here!'
					routeName='Signin'
				/>
			</ScrollView>
		</KeyboardAvoidingView>
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

export default connect(mapStateToProps)(SignupScreen)
