import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import AppHeader from '../components/AppHeader'
import { signout } from '../actions'
import { connect } from 'react-redux'
import { Feather } from '@expo/vector-icons'
import { navigate } from '../navigationRef'
import Spacer from '../components/Spacer'

const SettingsScreen = ({ dispatch }) => {
	return (
		<View>
			<AppHeader
				title='Settings'
				leftComponent={
					<TouchableOpacity onPress={() => navigate('ProjectList')}>
						<Feather size={30} name='chevron-left' style={styles.backIcon} />
					</TouchableOpacity>
				}
				showRightComponent={false}
			/>
			<Spacer>
				<Button onPress={() => dispatch(signout())} title='Sign out' />
			</Spacer>
		</View>
	)
}

SettingsScreen.navigationOptions = {
	header: null
}

const styles = StyleSheet.create({
	backIcon: {
		color: '#fff'
	}
})

export default connect()(SettingsScreen)
