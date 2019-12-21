import React from 'react'
import { StatusBar, TouchableOpacity, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Header } from 'react-native-elements'

const AppHeader = ({ title, leftComponent = null }) => {
	return (
		<>
			<Header
				backgroundColor='#7371fc'
				centerComponent={{
					text: title,
					style: { color: '#fff', fontSize: 16 }
				}}
				leftComponent={leftComponent}
				rightComponent={
					<TouchableOpacity onPress={() => navigate('ProjectDetail')}>
						<Feather size={22} name='settings' style={styles.settings} />
					</TouchableOpacity>
				}
			/>
			<StatusBar barStyle='light-content' />
		</>
	)
}

const styles = StyleSheet.create({
	settings: {
		color: '#fff',
		marginRight: 10
	}
})

export default AppHeader
