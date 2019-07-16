import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
	return (
		<View style={styled.container}>
			<View style={styled.flagpole} />
			<View style={styled.triangle} />
			<View style={styled.baseSmall} />
			<View style={styled.baseBig} />
		</View>
	)
}

const styled = StyleSheet.create({
	container: {
		marginTop: 2
	},
	flagpole: {
		position: 'absolute',
		height: 14,
		width: 2,
		backgroundColor: '#222',
		marginLeft: 9
	},
	triangle: {
		position: 'absolute',
		height: 5,
		width: 6,
		backgroundColor: '#F22',
		marginLeft: 3
	},
	baseSmall: {
		position: 'absolute',
		height: 2,
		width: 6,
		backgroundColor: '#222',
		marginLeft: 7,
		marginTop: 10
	},
	baseBig: {
		position: 'absolute',
		height: 2,
		width: 10,
		backgroundColor: '#222',
		marginLeft: 5,
		marginTop: 12
	}
})
