import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import AppHeader from '../components/AppHeader'
import { navigate } from '../navigationRef'

const ProjectDetailScreen = ({ navigation, projects }) => {
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

const mapStateToProps = ({ projects }) => ({ projects })

export default connect(mapStateToProps)(ProjectDetailScreen)
