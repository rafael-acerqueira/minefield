import { Dimensions } from 'react-native'

const difficultLevel = {
	easy: 0.1,
	normal: 0.2,
	hard: 0.3
}

const params = {
	blockSize: 30,
	borderSize: 5,
	fontSize: 15,
	headerRatio: 0.15,
	difficultLevel: difficultLevel['easy'],
	getColumnsAmount () {
		const width = Dimensions.get('window').width
		return Math.floor(width / this.blockSize)
	},
	getRowsAmount () {
		const totalHeight = Dimensions.get('window').height
		const boardHeight = totalHeight * (1 - this.headerRatio)
		return Math.floor(boardHeight / this.blockSize)
	}
}

export default params
