import React, { Component } from 'react';
import users from '../../../../../mockdata/users';

const FromMe = ({ user, messages }) => {
	return (
		<div className="message from-me">
			<div className="content-wrapper">
				<div className="message-container">
					{messages.map((item, i) => {
						return <p key={item.message + item.i}>{item.message}</p>;
					})}
				</div>
				<img src={`./static/images/${user.photo_thumbnail}`} alt="" />
			</div>
		</div>
	);
};

const FromYou = ({ user, messages }) => {
	return (
		<div className="message from-you">
			<div className="content-wrapper">
				<img src={`./static/images/${user.photo_thumbnail}`} alt="" />
				<div className="message-container">
					{messages.map((item, i) => {
						return <p key={item.message + item.i}>{item.message}</p>;
					})}
				</div>
			</div>
		</div>
	);
};

export default class MessageList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null
		};
	}
	componentDidMount = () => {
		let loggedInUser = localStorage.getItem('user');
		let user = this.findUserWithName(loggedInUser);
		console.log(user);
		this.setState({ user });
	};

	findUserWithName = username => {
		let user = users.find(u => u.username == username);
		if (!user) user = { id: 0, username: 'anonymus', photo_thumbnail: 'empty-avatar.jpg' }; // and will get messages as username
		return user;
	};

	groupMessages = messages => {
		let user = null,
			usersMessages = [],
			groupedMessages = [];
		if (messages) {
			messages.forEach((item, i) => {
				if (!user) {
					user = item.user;
					usersMessages.push({ message: item.message });
				} else {
					if (user == item.user) {
						usersMessages.push({ message: item.message });
					} else {
						groupedMessages.push({ user: user, messages: usersMessages });
						user = item.user;
						usersMessages = [];
						usersMessages.push({ message: item.message });
					}
				}
				if (i == messages.length - 1) {
					groupedMessages.push({ user: user, messages: usersMessages });
				}
			});
			return groupedMessages;
		} else return [];
	};

	render() {
		const { messages } = this.props;
		const groupedMessages = this.groupMessages(messages);

		return (
			<div className="message-list">
				{this.state.user &&
					groupedMessages.map((item, i) => {
						if (item.user == this.state.user.username)
							return <FromMe key={i} user={this.state.user} messages={item.messages} />;
						else
							return <FromYou key={i} user={this.findUserWithName(item.user)} messages={item.messages} />;
					})}
			</div>
		);
	}
}
