/*
 518  npl install -g webpack
  519  npm install -g webpack
  520  which webpack
  521  webpack
  522  webpack --config webpack.config.js 
  523  nodemon server/server.js
  524  webpack --config webpack.config.js 
  525  webpack --config webpack.config.js 
  526  nodemon server/server.js
  527  webpack --config webpack.config.js 
  528  nodemon server/server.js
  529  webpack --config webpack.config.js 
  530  webpack --config webpack.config.js 
  531  nodemon server/server.js


*/


import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'

render(
	//define the encompassng component,
	// DOM element we want to moun tit to
	<App/>,
	document.getElementById('app')
)