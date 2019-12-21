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
import AppHeader from '../components/AppHeader'

const ProjectListScreen = ({ dispatch, projects }) => {
	console.log(projects.projects)
	return (
		<View style={styles.container}>
			<AppHeader title='My Projects' />
			<NavigationEvents onWillFocus={() => dispatch(fetchProjects())} />
			<FlatList
				data={projects.projects}
				contentContainerStyle={{ flexGrow: 1 }}
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
	container: {
		flex: 1
	}
})

const mapStateToProps = ({ projects }) => ({ projects })

export default connect(mapStateToProps)(ProjectListScreen)
