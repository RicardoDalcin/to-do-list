import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import AppHeader from '../components/AppHeader'
import { NavigationEvents, FlatList } from 'react-navigation'
import { navigate } from '../navigationRef'
import { fetchTasks } from '../actions/task'
import TaskItem from '../components/TaskItem'

const ProjectDetailScreen = ({ dispatch, navigation, projects, tasks }) => {
	const project = projects.projects.find(
		proj => proj._id === navigation.getParam('_id')
	)

	return (
		<View style={styles.container}>
			<AppHeader
				leftComponent={
					<TouchableOpacity onPress={() => navigate('ProjectList')}>
						<Feather size={30} name='chevron-left' style={styles.backIcon} />
					</TouchableOpacity>
				}
				rightComponent={
					<TouchableOpacity onPress={() => navigate('Settings')}>
						<Feather size={22} name='settings' style={styles.settings} />
					</TouchableOpacity>
				}
				title={project.title}
				// bgColor={project.color}
			/>
			<NavigationEvents
				onWillFocus={() => dispatch(fetchTasks({ projectId: project._id }))}
			/>
			<FlatList
				data={tasks.tasks}
				keyExtractor={task => task._id}
				renderItem={({ item }) => <TaskItem dispatch={dispatch} task={item} />}
			/>
		</View>
	)
}

ProjectDetailScreen.navigationOptions = {
	header: null
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	backIcon: {
		color: '#fff'
	},
	settings: {
		color: '#fff',
		marginRight: 10
	}
})

const mapStateToProps = ({ projects, tasks }) => ({ projects, tasks })

export default connect(mapStateToProps)(ProjectDetailScreen)
