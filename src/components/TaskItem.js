import React, { useState } from 'react'
import { ListItem, CheckBox } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { completeTask } from '../actions'

const TaskItem = ({ task, dispatch }) => {
	const [completed, setCompleted] = useState(false)

	return (
		<ListItem
			title={task.title}
			titleStyle={{ fontSize: 18, color: '#262626' }}
			bottomDivider
			containerStyle={{ margin: 10, paddingVertical: 0 }}
			leftElement={
				<CheckBox
					checked={completed}
					onPress={() => {
						setCompleted(!completed)
						dispatch(completeTask({ taskId: task._id }))
					}}
					uncheckedIcon={
						<Feather name='square' size={22} style={styles.uncheckedIcon} />
					}
					checkedIcon={
						<Feather name='check-square' size={22} style={styles.checkedIcon} />
					}
				/>
			}
		/>
	)
}

const styles = StyleSheet.create({
	uncheckedIcon: {
		color: '#b4add9'
	},
	checkedIcon: {
		color: '#8a79e0'
	}
})

export default TaskItem
