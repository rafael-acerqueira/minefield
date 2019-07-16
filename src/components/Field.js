import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import params from '../params'

export default props => {
	const { mined, opened, nearMines } = props

	const styledField = [styled.field]
	if (opened) styledField.push(styled.opened)
	if (styledField.length === 1) styledField.push(styled.regular)

	let color = ''
	if (nearMines > 0) {
		if (nearMines === 1) color = '#2A28D7'
		if (nearMines === 2) color = '#2B520F'
		if (nearMines > 2 && nearMines < 6) color = '#F9060A'
		if (nearMines >= 6) color = '#F221A9'
	}

	return (
		<View style={styledField}>
			{!mined && opened && nearMines > 0 ? (
				<Text style={[styled.label, { color }]}>{nearMines}</Text>
			) : (
				false
			)}
		</View>
	)
}

const styled = StyleSheet.create({
	field: {
		height: params.blockSize,
		width: params.blockSize,
		borderWidth: params.borderSize
	},
	regular: {
		backgroundColor: '#999',
		borderLeftColor: '#CCC',
		borderTopColor: '#CCC',
		borderRightColor: '#333',
		borderBottomColor: '#333'
	},
	opened: {
		backgroundColor: '#999',
		borderColor: '#777',
		alignItems: 'center',
		justifyContent: 'center'
	},
	label: {
		fontWeight: 'bold',
		fontSize: params.fontSize
	}
})