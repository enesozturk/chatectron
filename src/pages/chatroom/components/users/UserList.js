import React, { Component } from 'react'

export default class UserList extends Component {
    render() {
        return (
            <div className="user-list">
                <ul>
                    <li>
                        <img src="./static/images/berkay.jpg" alt="" />
                        <div className="name-and-last-message">
                            <span className="name">Berkay</span>
                            <span className="last-message">Görüşürüüz</span>
                        </div>
                        <div className="unseen-messages">4</div>
                    </li>
                    <li className="active">
                        <img src="./static/images/irem.jpg" alt="" />
                        <div className="name-and-last-message">
                            <span className="name">İrem</span>
                            <span className="last-message">Sorun değil</span>
                        </div>
                        <div className="unseen-messages">1</div>
                    </li>
                    <li>
                        <img src="./static/images/burak.jpg" alt="" />
                        <div className="name-and-last-message">
                            <span className="name">Burak</span>
                            <span className="last-message">Nasıl gidiyor?</span>
                        </div>
                        <div className="unseen-messages all-seen">0</div>
                    </li>
                </ul>
            </div>
        )
    }
}
