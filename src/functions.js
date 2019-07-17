const createBoard = (rows, columns) => {
	return Array(rows)
		.fill(0)
		.map((_, rowIndex) => {
			return Array(columns)
				.fill(0)
				.map((_, columnIndex) => {
					return {
						rowIndex,
						columnIndex,
						opened: false,
						flagged: false,
						mined: false,
						exploded: false,
						nearMines: 0
					}
				})
		})
}

const spreadMines = (board, landMinesAmount) => {
	const rows = board.length
	const columns = board[0].length
	let landMinesPlanted = 0

	while (landMinesPlanted < landMinesAmount) {
		const rowSelected = parseInt(Math.random() * rows, 10)
		const columnSelected = parseInt(Math.random() * columns, 10)

		if (!board[rowSelected][columnSelected].mined) {
			board[rowSelected][columnSelected].mined = true
			landMinesPlanted++
		}
	}
}

export const createLandmineBoard = (rows, columns, landMinesAmount) => {
	const board = createBoard(rows, columns)
	spreadMines(board, landMinesAmount)
	return board
}
