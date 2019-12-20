import React from 'react'
import { StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { navigate } from '../navigationRef'

const ProjectListItem = ({ project }) => {
	return (
		<>
			<TouchableOpacity
				onPress={() => navigate('ProjectDetail', { _id: project._id })}
			>
				<ListItem
					chevron
					title={project.title}
					leftIcon={{
						name: 'circle',
						type: 'material-community',
						color: project.color,
						size: 12
					}}
					bottomDivider
				/>
			</TouchableOpacity>
		</>
	)
}

const styles = StyleSheet.create({})

export default ProjectListItem
