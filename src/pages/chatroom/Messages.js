import React, { Component } from 'react';
import { connect } from 'react-redux';

import TopBar from './components/messages/TopBar';
import MessageList from './components/messages/MessageList';
import Input from './components/messages/Input';

export class Messages extends Component {
	render() {
		return (
			<div className="messages">
				<TopBar />
				<MessageList messages={this.props.message.messages} />
				<Input />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	message: state.message
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
