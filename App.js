import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import params from './src/params'
import { createLandmineBoard } from './src/functions'
import MineField from './src/components/Minefield'

const App = () => {
	const landMinesAmount = () => {
		const cols = params.getColumnsAmount()
		const rows = params.getRowsAmount()

		return Math.ceil(cols * rows * params.difficultLevel)
	}

	const createState = () => {
		const cols = params.getColumnsAmount()
		const rows = params.getRowsAmount()
		return {
			board: createLandmineBoard(rows, cols, landMinesAmount)
		}
	}

	const [board, setBoard] = useState(createState().board)

	return (
		<View style={styled.container}>
			<Text>Starting minefield</Text>
			<Text>
				Grid size: {params.getRowsAmount()} x {params.getColumnsAmount()}
			</Text>
			<View style={styled.board}>
				<MineField board={board} />
			</View>
		</View>
	)
}

const styled = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	board: {
		alignItems: 'center',
		backgroundColor: '#AAA'
	}
})

export default App
