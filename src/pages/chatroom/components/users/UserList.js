import React, { Component } from 'react';
import users from '../../../../../mockdata/users';
export default class UserList extends Component {
	componentDidMount = () => {
		console.log(users);
	};

	render() {
		const user = localStorage.getItem('user');
		return (
			<div className="user-list">
				<ul>
					{users &&
						users.filter(u => u.username != user).map((item, i) => {
							return (
								<li>
									<img src={`./static/images/${item.photo_thumbnail}`} alt="" />
									<div className="name-and-last-message">
										<span className="name">{item.username}</span>
										<span className="last-message">Görüşürüüz</span>
									</div>
									<div className="unseen-messages">4</div>
								</li>
							);
						})}
				</ul>
			</div>
		);
	}
}
