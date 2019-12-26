import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import AppHeader from '../components/AppHeader'
import { Feather } from '@expo/vector-icons'
import { navigate } from '../navigationRef'
import { Input, Text } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { addTask } from '../actions'

const TaskCreateScreen = ({ dispatch, navigation }) => {
	const [title, setTitle] = useState('')

	return (
		<View style={styles.container}>
			<AppHeader
				title='New Task'
				leftComponent={
					<TouchableOpacity onPress={() => navigate('ProjectList')}>
						<Feather size={30} name='chevron-left' style={styles.backIcon} />
					</TouchableOpacity>
				}
				rightComponent={
					<TouchableOpacity
						disabled={title === '' ? true : false}
						onPress={() => {
							dispatch(
								addTask({ title, projectId: navigation.getParam('projectId') })
							)
							navigation.navigate('ProjectDetail', {
								_id: navigation.getParam('projectId')
							})
						}}
					>
						<Text style={title ? styles.ok : styles.okDisabled}>OK</Text>
					</TouchableOpacity>
				}
			/>
			<ScrollView style={{ margin: 15, flex: 1 }}>
				<Input
					value={title}
					onChangeText={setTitle}
					placeholder='Name your task'
					style={styles.input}
				/>
			</ScrollView>
		</View>
	)
}

TaskCreateScreen.navigationOptions = {
	header: null
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	backIcon: {
		color: '#fff'
	},
	ok: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#fff',
		marginRight: 10
	},
	okDisabled: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#b4add9',
		marginRight: 10
	}
})

export default connect()(TaskCreateScreen)
