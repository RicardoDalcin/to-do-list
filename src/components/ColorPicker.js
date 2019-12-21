import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { Overlay, Icon } from 'react-native-elements'

const ColorPicker = ({ setColor, setOverlay, overlay }) => {
	const colors = [
		'#A594F9',
		'#d5aaff',
		'#6eb5ff',
		'#ace7ff',
		'#85ead7',
		'#aff8db',
		'#ccffdd',
		'#e7ffac',
		'#fff5ba',
		'#ffdac1',
		'#ffb7b2',
		'#ff9aa2'
	]

	return (
		<Overlay
			height={150}
			isVisible={overlay}
			onBackdropPress={() => setOverlay(false)}
		>
			<FlatList
				contentContainerStyle={{
					display: 'flex',
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}
				numColumns={6}
				data={colors}
				keyExtractor={item => item}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => {
							setColor(item)
							setOverlay(false)
						}}
						style={{ margin: 5 }}
					>
						<Icon
							name='circle'
							type='material-community'
							size={30}
							color={item}
						/>
					</TouchableOpacity>
				)}
			/>
		</Overlay>
	)
}

export default ColorPicker
