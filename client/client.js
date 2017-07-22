/*
install, build and run:

npm install
npm install -g webpack
webpack --config webpack.config.js 
 nodemon server/server.js

keep track of something as state 
pass it down as prop to child component.
*/


import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'

render(
	//define the encompassng component,
	// DOM element we want to mount it to
	<App/>,
	document.getElementById('app')
)