import React, {Component} from 'react'

//var TextInput = React.createClass( {
class TextDisplay extends Component {

	render() {
		return <div>I'm display text from my parents: {this.props.text}</div>
	}
}

export default TextDisplay