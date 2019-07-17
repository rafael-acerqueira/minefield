import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import params from './src/params'
import {
	createLandmineBoard,
	openField,
	cloneBoard,
	hasExplosion,
	wonGame,
	showLandMines
} from './src/functions'
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
			board: createLandmineBoard(rows, cols, landMinesAmount()),
			won: false,
			lost: false
		}
	}

	const onOpenField = (row, column) => {
		const memoryBoard = cloneBoard(board)
		openField(memoryBoard, row, column)
		const youLost = hasExplosion(memoryBoard)
		console.debug(youLost)
		const youWon = wonGame(memoryBoard)

		if (youLost) {
			showLandMines(memoryBoard)
			Alert.alert('Peerrdeeuuu', 'Tenta mais uma vez (:')
		}

		if (youWon) {
			Alert.alert('Parabéns!', 'You Win\brpaaaapaaaaa')
		}

		setBoard(memoryBoard)
		setLost(youLost)
		setWon(youWon)
	}

	const [board, setBoard] = useState(createState().board)
	const [lost, setLost] = useState(createState().lost)
	const [won, setWon] = useState(createState().won)

	return (
		<View style={styled.container}>
			<Text>Starting minefield</Text>
			<Text>
				Grid size: {params.getRowsAmount()} x {params.getColumnsAmount()}
			</Text>
			<View style={styled.board}>
				<MineField board={board} openField={onOpenField} />
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
