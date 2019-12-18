import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { signout } from '../actions'

const ProjectListScreen = ({ dispatch }) => {
	return (
		<View>
			<Text>ProjectListScreen</Text>
			<Button onPress={() => dispatch(signout())} title='Sign out' />
		</View>
	)
}

const styles = StyleSheet.create({})

const mapStateToProps = state => {
	return {
		projects: state
	}
}

export default connect(mapStateToProps)(ProjectListScreen)
