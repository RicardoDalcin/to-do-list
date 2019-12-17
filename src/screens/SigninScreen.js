import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

const SigninScreen = ({ dispatch }) => {
	return (
		<View>
			<Text>SigninScreen</Text>
		</View>
	)
}

const styles = StyleSheet.create({})

export default connect()(SigninScreen)
