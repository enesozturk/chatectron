import React, { Component } from 'react'

import Call from 'react-icons/lib/md/call'
import VideoCall from 'react-icons/lib/md/video-call'

export default class TopBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="username">
                    <span>İrem</span>
                </div>
                <div className="user-call-icons">
                    <Call size={30} />
                    <VideoCall size={30} />
                </div>
            </div>
        )
    }
}
