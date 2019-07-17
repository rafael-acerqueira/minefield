import React from 'react'
import { View, StyleSheet } from 'react-native'
import Field from './Field'

export default props => {
	const rows = props.board.map((row, indexRow) => {
		const columns = row.map((field, indexColumn) => (
			<Field key={indexColumn} {...field} />
		))
		return (
			<View key={indexRow} style={{ flexDirection: 'row' }}>
				{columns}
			</View>
		)
	})
	return <View style={styled.container}>{rows}</View>
}

const styled = StyleSheet.create({
	container: {
		backgroundColor: '#EEE'
	}
})
