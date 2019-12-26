import React from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'

const AppHeader = ({
	title = '',
	leftComponent = null,
	rightComponent = null,
	bgColor = '#7371fc'
}) => {
	return (
		<>
			<Header
				backgroundColor={bgColor}
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
