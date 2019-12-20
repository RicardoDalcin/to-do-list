import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
	ScrollView,
	FlatList
} from 'react-native'
import { Button } from 'react-native-elements'
import { fetchProjects } from '../actions'
import { Feather } from '@expo/vector-icons'
import { NavigationEvents } from 'react-navigation'
import { navigate } from '../navigationRef'
import ProjectListItem from '../components/ProjectListItem'
import { Header } from 'react-native-elements'

const ProjectListScreen = ({ dispatch, projects }) => {
	console.log(projects.projects)
	return (
		<View>
			<Header
				backgroundColor='#7371fc'
				centerComponent={{
					text: 'My Projects',
					style: { color: '#fff', fontSize: 16 }
				}}
				rightComponent={
					<TouchableOpacity onPress={() => navigate('ProjectDetail')}>
						<Feather size={22} name='settings' style={styles.settings} />
					</TouchableOpacity>
				}
			/>
			<NavigationEvents onWillFocus={() => dispatch(fetchProjects())} />
			<StatusBar barStyle='light-content' />
			<FlatList
				data={projects.projects}
				keyExtractor={proj => proj._id}
				renderItem={({ item }) => <ProjectListItem project={item} />}
			/>
		</View>
	)
}

ProjectListScreen.navigationOptions = {
	header: null
}

const styles = StyleSheet.create({
	settings: {
		color: '#fff',
		marginRight: 10
	}
})

const mapStateToProps = ({ projects }) => ({ projects })

export default connect(mapStateToProps)(ProjectListScreen)
