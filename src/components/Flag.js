import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
	return (
		<View style={styled.container}>
			<View
				style={[
					styled.flagpole,
					props.selectLevel ? styled.flagpoleSelectLevel : null
				]}
			/>
			<View
				style={[
					styled.triangle,
					props.selectLevel ? styled.triangleSelectLevel : null
				]}
			/>
			<View
				style={[
					styled.baseSmall,
					props.selectLevel ? styled.baseSmallSelectLevel : null
				]}
			/>
			<View
				style={[
					styled.baseBig,
					props.selectLevel ? styled.baseBigSelectLevel : null
				]}
			/>
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
	},
	flagpoleSelectLevel: {
		height: 28,
		width: 4,
		marginLeft: 16
	},
	triangleSelectLevel: {
		height: 10,
		width: 14,
		marginLeft: 3
	},
	baseSmallSelectLevel: {
		height: 4,
		width: 12,
		marginTop: 20,
		marginLeft: 12
	},
	baseBigSelectLevel: {
		height: 4,
		width: 20,
		marginLeft: 8,
		marginTop: 24
	}
})
