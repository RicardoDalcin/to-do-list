import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { tryLocalSignin } from '../actions'

const LoadingScreen = ({ dispatch }) => {
	useEffect(() => {
		dispatch(tryLocalSignin())
	}, [])

	return null
}

export default connect()(LoadingScreen)
