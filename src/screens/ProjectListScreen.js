import React from 'react'
import { connect } from 'react-redux'
import {
	View,
	StyleSheet,
	FlatList,
	Text,
	TouchableOpacity
} from 'react-native'
import { fetchProjects } from '../actions'
import { NavigationEvents } from 'react-navigation'
import ProjectListItem from '../components/ProjectListItem'
import AppHeader from '../components/AppHeader'
import { Feather } from '@expo/vector-icons'
import { navigate } from '../navigationRef'

const ProjectListScreen = ({ dispatch, projects }) => {
	return (
		<View style={styles.container}>
			<AppHeader
				title='My Projects'
				leftComponent={
					<TouchableOpacity
						onPress={() => {
							navigate('ProjectCreate')
						}}
					>
						<Feather name='plus' size={24} style={styles.plusIcon} />
					</TouchableOpacity>
				}
			/>
			<NavigationEvents onWillFocus={() => dispatch(fetchProjects())} />
			<View style={{ margin: 15, flex: 1 }}>
				<FlatList
					data={projects.projects}
					contentContainerStyle={{ flexGrow: 1 }}
					keyExtractor={proj => proj._id}
					renderItem={({ item }) => <ProjectListItem project={item} />}
				/>
				<Text>{projects.error}</Text>
			</View>
		</View>
	)
}

ProjectListScreen.navigationOptions = {
	header: null
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	plusIcon: {
		color: '#fff'
	}
})

const mapStateToProps = ({ projects }) => ({ projects })

export default connect(mapStateToProps)(ProjectListScreen)
