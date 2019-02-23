import React, { Component } from 'react';
import { connect } from 'react-redux';

import Messages from './chatroom/Messages';
import { Users } from './chatroom/Users';

const url = () => `ws://localhost:8081/`;
export let socket = null;

export class ChatRoom extends Component {
	componentWillMount = () => {};

	componentDidMount() {
		socket = new WebSocket(url());

		socket.onopen = e => {
			socket.onmessage = e => {
				let messages = this.props.message.messages;
				console.log(e.data);
				messages.push(JSON.parse(e.data));
				this.props.addMessage(messages);
			};
		};
	}

	render() {
		const username = this.props.user.username;
		return (
			<div className="page page--chat">
				<Users user={this.props.user.username} />
				<Messages />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	message: state.message
});

const mapDispatchToProps = dispatch => ({
	login: payload => dispatch({ type: 'LOGIN', payload }),
	addMessage: payload => dispatch({ type: 'ADD_MESSAGE', payload })
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
