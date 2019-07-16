import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
	return (
		<View style={styled.container}>
			<View style={styled.core} />
			<View style={styled.line} />
			<View style={[styled.line, { transform: [{ rotate: '45deg' }] }]} />
			<View style={[styled.line, { transform: [{ rotate: '90deg' }] }]} />
			<View style={[styled.line, { transform: [{ rotate: '135deg' }] }]} />
		</View>
	)
}

const styled = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	core: {
		height: 14,
		width: 14,
		borderRadius: 10,
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center'
	},
	line: {
		position: 'absolute',
		height: 3,
		width: 20,
		borderRadius: 3,
		backgroundColor: 'black'
	}
})
