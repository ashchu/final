import React, { Component } from 'react';
import './Textbox.css';
const prompts = ["Wow I can't believe you made it this far",
				"honestly this took a LOT of work to make so thanks for sticking through it!",
				"well anyways, back to the story",
				"in the next room, you see your 2 swexecs deep in a heated debate so you decide to listen in",
				"(these are not indicative of their actual opinions which IDK what they are)",
				"'Sliver is actual garbage like how can you eat there' - sierra",
				"'What, but it has seven different flavors every WEEK! and the sauces are so good!' - allison",
				"obviously, one person is incorrect, and her name's also a mountain",
				"surprisingly, this has nothing to do with the password for this stage",
				"Again, you know there must be some encoded text",
				"but how will you get the actual passWORD and the correct word???",
				"Conveniniently, the back of the paper tells you that the word is found near a picture of one of your swexecs in a page you should have visited previously",
				"where could this picture be?",
				"And how can you decode the image? Is there a way to decode an image to text?",
				"Click next for a hint",
				"http://stylesuxx.github.io/steganography/"];

class Textbox extends Component {
	constructor(props) {
		super(props);
		this.state = {text: prompts,
					  max: 16,
					  index: 0
					 };

		this.handleForward = this.handleForward.bind(this);
		this.handleBackwards = this.handleBackwards.bind(this);
	}

	handleForward() {
		console.log(this.state.index);
		if (this.state.index < (this.state.max - 1)) {
			this.setState({index: this.state.index + 1});
		}
	}

	handleBackwards() {
		if (this.state.index > 0) {
			this.setState({index: this.state.index - 1});
		}
	}

	renderBackwardsButton() {
		if (this.state.index == 0) {
			return null;
		}
		return <button onClick={this.handleBackwards}>Previous</button>;
	}

	renderForwardsButton() {
		if (this.state.index >= this.state.max - 1) {
			return null;
		}
		return <button onClick={this.handleForward}>Next</button>;
	}

	renderContent() {
		if (this.state.index >= 6) {
			return <div className="content">
					<img id="otp" src={require('./VKQGAVCTUVKTFWF.png').default} />
				   </div>;
		}
		return null;
	}

	render() {
		let content = this.renderContent();
		let forwardButton = this.renderForwardsButton();
		let backwardsButton = this.renderBackwardsButton();

		return (
			<div>
				<div id="textDisplay"> {this.state.text[this.state.index]} </div>
				<div>
					{backwardsButton}
					{forwardButton}
				</div>
				{content}
			</div>
		)
	}
}

export default Textbox;
