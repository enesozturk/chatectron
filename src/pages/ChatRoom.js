import React, { Component } from 'react'
import { connect } from 'react-redux'

import Messages from './chatroom/Messages'
import { Users } from './chatroom/Users';

import io from 'socket.io-client'
const socket = io('http://localhost');


export class ChatRoom extends Component {

    componentWillMount = () => { }

    componentDidMount() {
        socket.on('chat', (data) => {
            console.log(data);
        });

        const user = this.props.user
        socket.emit('msg', `Hello! I'm ${user}`);
    }

    render() {
        const username = this.props.user.username
        return (
            <div className="page page--chat">
                <Users user={this.props.user.username} />
                <Messages />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = dispatch => ({
    login: payload =>
        dispatch({ type: "LOGIN", payload })
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)
