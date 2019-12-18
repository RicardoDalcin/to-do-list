import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { addProject } from '../actions'

const SigninScreen = ({ dispatch }) => {
	useEffect(() => {
		dispatch(addProject({ title: 'title', description: 'description' }))
	}, [])

	return (
		<View>
			<Text>SigninScreen</Text>
		</View>
	)
}

const styles = StyleSheet.create({})

export default connect()(SigninScreen)
