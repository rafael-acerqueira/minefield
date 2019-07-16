import React from 'react'
import { View, Text } from 'react-native'
import params from './src/params'

const App = () => {
	return (
		<View>
			<Text>Starting minefield</Text>
			<Text>
				Grid size: {params.getRowsAmount()} x {params.getColumnsAmount()}
			</Text>
		</View>
	)
}

export default App
