import React from "react"
import { connect } from "react-redux"
import { View, Text, StyleSheet } from "react-native"

const ProjectListScreen = () => {
	return (
		<View>
			<Text>ProjectListScreen</Text>
		</View>
	)
}

const styles = StyleSheet.create({})

export default connect()(ProjectListScreen)
