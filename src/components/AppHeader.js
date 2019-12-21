import React from 'react'
import { StatusBar, TouchableOpacity, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Header } from 'react-native-elements'
import { navigate } from '../navigationRef'

const AppHeader = ({
	title = '',
	leftComponent = null,
	rightComponent = null
}) => {
	return (
		<>
			<Header
				backgroundColor='#7371fc'
				centerComponent={{
					text: title,
					style: { color: '#fff', fontSize: 16 }
				}}
				leftComponent={leftComponent}
				rightComponent={rightComponent}
			/>
			<StatusBar barStyle='light-content' />
		</>
	)
}

const styles = StyleSheet.create({})

export default AppHeader
