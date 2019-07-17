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

export const cloneBoard = board => {
	return board.map(rows => {
		return rows.map(field => ({ ...field }))
	})
}

const getNeighbors = (board, row, column) => {
	const neighbors = []
	const rows = [row - 1, row, row + 1]
	const columns = [column - 1, column, column + 1]
	rows.forEach(r => {
		columns.forEach(c => {
			const different = r !== row || c !== column
			const validRow = r >= 0 && r < board.length
			const validColumn = c >= 0 && c < board[0].length
			if (different && validRow && validColumn) {
				neighbors.push(board[r][c])
			}
		})
	})
	return neighbors
}

const safeNeighborhood = (board, row, column) => {
	const safes = (result, neighbor) => result && !neighbor.mined
	return getNeighbors(board, row, column).reduce(safes, true)
}

export const openField = (board, row, column) => {
	const field = board[row][column]
	if (!field.opened) {
		field.opened = true
		if (field.mined) {
			field.exploded = true
		} else if (safeNeighborhood(board, row, column)) {
			getNeighbors(board, row, column).forEach(n =>
				openField(board, n.row, n.column)
			)
		} else {
			const neighbors = getNeighbors(board, row, column)
			field.nearMines = neighbors.filter(n => n.mined).length
		}
	}
}

const fields = board => [].concat(...board)

export const hasExplosion = board =>
	fields(board).filter(field => field.exploded).length > 0

const pending = field =>
	(field.mined && !field.flagged) || (!field.mined && !field.opened)

export const wonGame = board =>
	fields(board).filter(field => field.pending).length === 0

export const showLandMines = board =>
	fields(board)
		.filter(field => field.mined)
		.forEach(field => (field.opened = true))
