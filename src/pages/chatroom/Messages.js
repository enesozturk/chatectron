import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Call from 'react-icons/lib/md/call'
import VideoCall from 'react-icons/lib/md/video-call'

export class Messages extends Component {

    render() {
        return (
            <div className="messages">
                <div className="top-bar">
                    <div className="username">
                        <span>Berkay Akbulut</span>
                    </div>
                    <div className="user-call-icons">
                        <Call size={30} />
                        <VideoCall size={30} />
                    </div>
                </div>
                <div className="message-list">

                </div>
                <div className="input-container">
                    <input type="text" placeholder="Type your message here..." className="message-input" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
