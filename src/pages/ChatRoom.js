import React, { Component } from 'react'
import { connect } from 'react-redux'

import Messages from './chatroom/Messages'
import { Users } from './chatroom/Users';

export class ChatRoom extends Component {

    componentWillMount = () => {
        const username = localStorage.getItem('user')
        this.props.login(username)
    }

    render() {
        const username = this.props.user.username
        return (
            <div className="page page--chat">
                <Users />
                <Messages />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    login: payload =>
        dispatch({ type: "LOGIN", payload })
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)
