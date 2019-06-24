import React, { Component } from 'react';
import { MockUserData } from '../../../../../data/mock_user_data';
export default class UserList extends Component {
	componentDidMount = () => {
		console.log(MockUserData);
	};

	render() {
		const user = localStorage.getItem('user');
		return (
			<div className="user-list">
				<ul>
					{MockUserData &&
						MockUserData.filter(u => u.username != user).map((item, i) => {
							return (
								<li>
									<img src={`./static/images/${item.photo_thumbnail}`} alt="" />
									<div className="name-and-last-message">
										<span className="name">{item.username}</span>
										<span className="last-message">{item.lastMessage}</span>
									</div>
									{item.unread_messages > 0 && (
										<div className="unseen-messages">{item.unread_messages}</div>
									)}
								</li>
							);
						})}
				</ul>
			</div>
		);
	}
}
