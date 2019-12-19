import React, { useState, useRef } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Feather } from '@expo/vector-icons'

const AuthForm = ({
	headerText,
	error,
	onSubmit,
	submitButtonText,
	formType,
	dispatch
}) => {
	const [login, setLogin] = useState('')
	const [name, setName] = useState('')
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const inputLogin = useRef(null)
	const inputName = useRef(null)
	const inputUsername = useRef(null)
	const inputEmail = useRef(null)
	const inputPassword = useRef(null)

	return (
		<>
			<Spacer>
				<Text h3 style={styles.title}>
					{headerText}
				</Text>
			</Spacer>
			{formType === 'login' && (
				<Spacer>
					<Input
						ref={inputLogin}
						value={login}
						onChangeText={setLogin}
						label='Email/username'
						style={styles.input}
						leftIcon={<Feather style={styles.icon} name='mail' />}
						keyboardType='email-address'
						autoCapitalize='none'
						autoCorrect={false}
						onSubmitEditing={() => inputPassword.current.focus()}
					/>
				</Spacer>
			)}
			{formType === 'register' && (
				<>
					<Spacer>
						<Input
							ref={inputName}
							value={name}
							onChangeText={setName}
							label='Name'
							style={styles.input}
							leftIcon={<Feather style={styles.icon} name='user' />}
							onSubmitEditing={() => inputEmail.current.focus()}
						/>
					</Spacer>
					<Spacer>
						<Input
							ref={inputEmail}
							value={email}
							onChangeText={setEmail}
							label='Email'
							style={styles.input}
							leftIcon={<Feather style={styles.icon} name='mail' />}
							keyboardType='email-address'
							autoCapitalize='none'
							autoCorrect={false}
							onSubmitEditing={() => inputUsername.current.focus()}
						/>
					</Spacer>
					<Spacer>
						<Input
							ref={inputUsername}
							value={username}
							onChangeText={setUsername}
							label='Username'
							style={styles.input}
							leftIcon={<Feather style={styles.icon} name='user' />}
							keyboardType='email-address'
							autoCapitalize='none'
							autoCorrect={false}
							onSubmitEditing={() => inputPassword.current.focus()}
						/>
					</Spacer>
				</>
			)}
			<Spacer>
				<Input
					ref={inputPassword}
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
			{error ? <Text style={styles.errorMessage}>{error}</Text> : null}
			<Spacer>
				<Button
					title={submitButtonText}
					style={styles.button}
					onPress={
						formType === 'login'
							? () => {
									dispatch(onSubmit({ login, password }))
							  }
							: () => dispatch(onSubmit({ name, username, email, password }))
					}
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

export default AuthForm
