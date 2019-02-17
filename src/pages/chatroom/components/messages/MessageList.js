import React, { Component } from 'react';

const FromMe = ({ messages }) => {
	return (
		<div className="message from-me">
			<div className="content-wrapper">
				<div className="message-container">
					{messages.map((item, i) => {
						return <p key={item.message + item.i}>{item.message}</p>;
					})}
				</div>
				<img src="./static/images/enes.jpg" alt="" />
			</div>
		</div>
	);
};

const FromYou = ({ messages }) => {
	return (
		<div className="message from-you">
			<div className="content-wrapper">
				<img src="./static/images/irem.jpg" alt="" />
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
	componentDidMount = () => {};

	groupMessages = messages => {
		console.log(messages);
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
						usersMessages.push({ message: item.message });
					}
					if (i == messages.length - 1) {
						groupedMessages.push({ user: user, messages: usersMessages });
					}
				}
			});
			console.log(groupedMessages);
			return groupedMessages;
		}
	};

	render() {
		const { messages } = this.props;
		const groupedMessages = this.groupMessages(messages);

		return (
			<div className="message-list">
				{groupedMessages.map((item, i) => {
					if (item.user == 'enes') return <FromMe key={i} messages={item.messages} />;
					else return <FromYou key={i} messages={item.messages} />;
				})}
			</div>
		);
	}
}
