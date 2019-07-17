import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Flag from './Flag'

export default props => (
	<View style={styled.container}>
		<View style={styled.flagContainer}>
			<TouchableOpacity onPress={props.onPress} style={styled.flagButton}>
				<Flag selectLevel />
			</TouchableOpacity>
			<Text style={styled.flagsLeft}>= {props.flagsLeft}</Text>
		</View>
		<TouchableOpacity style={styled.button} onPress={props.onNewGame}>
			<Text style={styled.buttonLabel}>Jogar Novamente</Text>
		</TouchableOpacity>
	</View>
)

const styled = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#EEE',
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingTop: 20,
		paddingHorizontal: 20
	},
	flagContainer: {
		flexDirection: 'row'
	},
	flagButton: {
		marginTop: 10,
		minWidth: 30
	},
	flagsLeft: {
		fontSize: 30,
		fontWeight: 'bold',
		paddingTop: 5,
		marginLeft: 20
	},
	button: {
		backgroundColor: '#999',
		padding: 5
	},
	buttonLabel: {
		fontSize: 20,
		color: '#DDD',
		fontWeight: 'bold'
	}
})
