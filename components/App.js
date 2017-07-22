import React from 'react'
import TextInput from './TextInput'


var App = React.createClass( {

	render() {
		return (
			<div>
				<h1>This is the app component</h1>
				<TextInput/>
			</div>
		)
	}

})

export default App // allows to import in client.js
