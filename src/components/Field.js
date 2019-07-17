import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import params from '../params'
import Landmine from './Landmine'
import Flag from './Flag'

export default props => {
	const { mined, opened, nearMines, exploded, flagged } = props

	const styledField = [styled.field]
	if (opened) styledField.push(styled.opened)
	if (exploded) styledField.push(styled.exploded)
	if (!opened && !exploded) styledField.push(styled.regular)

	let color = ''
	if (nearMines > 0) {
		if (nearMines === 1) color = '#2A28D7'
		if (nearMines === 2) color = '#2B520F'
		if (nearMines > 2 && nearMines < 6) color = '#F9060A'
		if (nearMines >= 6) color = '#F221A9'
	}

	return (
		<TouchableWithoutFeedback onPress={props.onPress}>
			<View style={styledField}>
				{!mined && opened && nearMines > 0 ? (
					<Text style={[styled.label, { color }]}>{nearMines}</Text>
				) : (
					false
				)}

				{mined && opened ? <Landmine /> : false}

				{flagged && !opened ? <Flag /> : false}
			</View>
		</TouchableWithoutFeedback>
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
	exploded: {
		backgroundColor: 'red',
		borderColor: 'red'
	},
	label: {
		fontWeight: 'bold',
		fontSize: params.fontSize
	}
})
