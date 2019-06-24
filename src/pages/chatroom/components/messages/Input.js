import React, { Component } from 'react';

import Attach from 'react-icons/lib/md/attach-file';
import Send from 'react-icons/lib/md/send';
import Face from 'react-icons/lib/md/face';

import { socket } from '../../../ChatRoom';
import { MockUserData } from '../../../../../data/mock_user_data';

export default class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: ''
		};
	}

	componentDidMount = () => {};

	changeMessage = e => {
		this.setState({ message: e.target.value });
	};

	keyPressForMessageInput = e => {
		if (e.key == 'Enter') {
			this.sendMessage();
		}
	};

	findUserWithName = username => {
		let user = MockUserData.find(u => u.username == username);
		if (!user) user = { id: 0, username: 'anonymus', photo_thumbnail: 'empty-avatar.jpg' };
		return user;
	};

	sendMessage = () => {
		const loggedInUser = localStorage.getItem('user');
		let user = this.findUserWithName(loggedInUser); // if user is not exist in users list he will send messages as anonymus
		if (this.state.message != '') {
			socket.send(JSON.stringify({ user: user.username, message: this.state.message }));
			this.setState({ message: '' });
		}
	};

	render() {
		return (
			<div className="input-container">
				<input
					type="text"
					placeholder="Type your message here..."
					className="message-input"
					value={this.state.message}
					onChange={this.changeMessage}
					onKeyPress={this.keyPressForMessageInput}
				/>
				<div className="input-buttons">
					<Face size={25} />
					<Attach size={25} />
					<Send onClick={this.sendMessage} size={25} />
				</div>
			</div>
		);
	}
}
