import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import params from './src/params'
import MineField from './src/components/Minefield'
import Header from './src/components/Header'
import {
	createLandmineBoard,
	openField,
	cloneBoard,
	hasExplosion,
	wonGame,
	showLandMines,
	toggleFlag,
	flagsUsed
} from './src/functions'

const App = () => {
	const landMinesAmount = () => {
		const cols = params.getColumnsAmount()
		const rows = params.getRowsAmount()

		return Math.ceil(cols * rows * params.difficultLevel)
	}

	const INITIAL_STATE = {
		board: createLandmineBoard(
			params.getRowsAmount(),
			params.getColumnsAmount(),
			landMinesAmount()
		),
		won: false,
		lost: false
	}

	const newGame = () => {
		const { board, won, lost } = INITIAL_STATE
		setBoard(board)
		setLost(lost)
		setWon(won)
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

	const handleChangeFlag = (row, column) => {
		const memoryBoard = cloneBoard(board)
		toggleFlag(memoryBoard, row, column)
		const youWon = wonGame(memoryBoard)
		if (youWon) {
			Alert.alert('Parabéns!', 'You Win! Espertinho(a)')
		}
		setBoard(memoryBoard)
		setWon(youWon)
	}

	const [board, setBoard] = useState(INITIAL_STATE.board)
	const [lost, setLost] = useState(INITIAL_STATE.lost)
	const [won, setWon] = useState(INITIAL_STATE.won)

	return (
		<View style={styled.container}>
			<Header
				flagsLeft={landMinesAmount() - flagsUsed(board)}
				onNewGame={newGame}
			/>
			<View style={styled.board}>
				<MineField
					board={board}
					openField={onOpenField}
					handleChangeFlag={handleChangeFlag}
				/>
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
