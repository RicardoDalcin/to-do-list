import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
	FlatList
} from 'react-native'
import AppHeader from '../components/AppHeader'
import { Feather } from '@expo/vector-icons'
import { navigate } from '../navigationRef'
import { Input, ListItem, Button, Overlay, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { addProject } from '../actions'

const ProjectCreateScreen = ({ dispatch, navigation }) => {
	const [title, setTitle] = useState('')
	const [color, setColor] = useState('#A594F9')
	const [overlay, setOverlay] = useState(false)

	const inputTitle = useRef(null)
	const inputColor = useRef(null)

	return (
		<View style={styles.container}>
			<AppHeader
				title='New Project'
				leftComponent={
					<TouchableOpacity onPress={() => navigate('ProjectList')}>
						<Feather size={30} name='chevron-left' style={styles.backIcon} />
					</TouchableOpacity>
				}
			/>
			<Overlay isVisible={overlay} onBackdropPress={() => setOverlay(false)}>
				<FlatList
					data={[
						'#ffb5e8',
						'#b28dff',
						'#dcd3ff',
						'#aff8db',
						'#6eb5ff',
						'#e7ffac'
					]}
					keyExtractor={item => item}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => {
								setColor(item)
								setOverlay(false)
							}}
						>
							<Icon name='circle' type='material-community' color={item} />
						</TouchableOpacity>
					)}
				/>
			</Overlay>
			<ScrollView style={{ margin: 15, flex: 1 }}>
				<Input
					ref={inputTitle}
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
				<Button
					onPress={() => {
						dispatch(addProject({ title, color }))
						navigation.navigate('ProjectList')
					}}
					title='Create project'
				/>
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
	}
})

export default connect()(ProjectCreateScreen)
