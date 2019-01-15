import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ChatRoom extends Component {

    render() {
        return (
            <div>
                I'm {this.props.user.username}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)
