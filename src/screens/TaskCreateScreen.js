import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import AppHeader from '../components/AppHeader'
import { Feather } from '@expo/vector-icons'
import { navigate } from '../navigationRef'
import { Input, ListItem, Text, Overlay, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { addTask } from '../actions'
import DatePicker from 'react-native-datepicker'
import ColorPicker from '../components/ColorPicker'

const TaskCreateScreen = ({ dispatch, navigation }) => {
	const today = new Date()
	const y = today.getFullYear()
	const m = today.getMonth() < 10 ? '0' + today.getMonth() : today.getMonth()
	const d = today.getDate() < 10 ? '0' + today.getDate() : today.getDate()

	const [title, setTitle] = useState('')
	const [deadline, setDeadline] = useState(`${y}-${m}-${d}`)

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
				<DatePicker
					style={{ width: 320 }}
					date={deadline}
					mode='date'
					// placeholder='Select date'
					format='YYYY-MM-DD'
					minDate={`${y}-${m}-${d}`}
					// confirmBtnText='Confirm'
					// cancelBtnText='Cancel'
					customStyles={{
						dateIcon: {
							display: 'none'
						},
						dateInput: {
							borderTopWidth: 0,
							borderLeftWidth: 0,
							borderRightWidth: 0
						}
					}}
					onDateChange={setDeadline}
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
