import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import AppHeader from '../components/AppHeader'
import { Feather } from '@expo/vector-icons'
import { navigate } from '../navigationRef'
import { Input, ListItem, Text, Overlay, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { addProject } from '../actions'
import ColorPicker from '../components/ColorPicker'

const ProjectCreateScreen = ({ dispatch, navigation }) => {
	const [title, setTitle] = useState('')
	const [color, setColor] = useState('#A594F9')
	const [overlay, setOverlay] = useState(false)

	return (
		<View style={styles.container}>
			<AppHeader
				title='New Project'
				leftComponent={
					<TouchableOpacity onPress={() => navigate('ProjectList')}>
						<Feather size={30} name='chevron-left' style={styles.backIcon} />
					</TouchableOpacity>
				}
				rightComponent={
					<TouchableOpacity
						disabled={title === '' ? true : false}
						onPress={() => {
							dispatch(addProject({ title, color }))
							navigation.navigate('ProjectList')
						}}
					>
						<Text style={title ? styles.ok : styles.okDisabled}>OK</Text>
					</TouchableOpacity>
				}
			/>
			<ColorPicker
				setColor={setColor}
				overlay={overlay}
				setOverlay={setOverlay}
			/>
			<ScrollView style={{ margin: 15, flex: 1 }}>
				<Input
					value={title}
					onChangeText={setTitle}
					placeholder='Name your project'
					style={styles.input}
				/>
				<TouchableOpacity onPress={() => setOverlay(!overlay)}>
					<ListItem
						title='Choose a color'
						chevron
						leftIcon={{
							name: 'palette',
							type: 'material',
							color: '#A594F9',
							size: 24
						}}
						rightIcon={{
							name: 'circle',
							type: 'material-community',
							color: color,
							size: 15
						}}
						bottomDivider
					/>
				</TouchableOpacity>
			</ScrollView>
		</View>
	)
}

ProjectCreateScreen.navigationOptions = {
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

export default connect()(ProjectCreateScreen)
