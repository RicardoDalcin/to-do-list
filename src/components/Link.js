import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import Spacer from './Spacer'
import { withNavigation } from 'react-navigation'

const Link = ({ text, routeName, navigation }) => {
	return (
		<Spacer>
			<TouchableOpacity onPress={() => navigation.navigate(routeName)}>
				<Text style={styles.linkText}>{text}</Text>
			</TouchableOpacity>
		</Spacer>
	)
}

const styles = StyleSheet.create({
	linkText: {
		color: '#4286f4'
	}
})

export default withNavigation(Link)
