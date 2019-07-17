import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import { difficultLevel } from '../params'

export default props => (
	<Modal
		onRequestClose={props.onCancel}
		visible={props.isVisible}
		animationType="slide"
		transparent={true}
	>
		<View style={styled.frame}>
			<View style={styled.container}>
				<Text style={styled.title}>Selecione o nível</Text>
				<TouchableOpacity
					style={[styled.button, styled.bgEasy]}
					onPress={() => props.onLevelSelected(difficultLevel['easy'])}
				>
					<Text style={styled.buttonLabel}>Fácil</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styled.button, styled.bgNormal]}
					onPress={() => props.onLevelSelected(difficultLevel['normal'])}
				>
					<Text style={styled.buttonLabel}>Normal</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styled.button, styled.bgHard]}
					onPress={() => props.onLevelSelected(difficultLevel['hard'])}
				>
					<Text style={styled.buttonLabel}>Difícil</Text>
				</TouchableOpacity>
			</View>
		</View>
	</Modal>
)

const styled = StyleSheet.create({
	frame: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0.6)'
	},
	container: {
		backgroundColor: '#EEE',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 15
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold'
	},
	button: {
		marginTop: 10,
		padding: 5
	},
	buttonLabel: {
		fontSize: 20,
		color: '#EEE',
		fontWeight: 'bold'
	},
	bgEasy: {
		backgroundColor: '#49b65d'
	},
	bgNormal: {
		backgroundColor: '#2765F7'
	},
	bgHard: {
		backgroundColor: '#F26337'
	}
})
