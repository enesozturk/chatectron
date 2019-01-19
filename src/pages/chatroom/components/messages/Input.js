import React, { Component } from 'react'

import Attach from 'react-icons/lib/md/attach-file'
import Send from 'react-icons/lib/md/send'
import Face from 'react-icons/lib/md/face'
export default class Input extends Component {
    render() {
        return (
            <div className="input-container">
            <input type="text" placeholder="Type your message here..." className="message-input" />
            <div className="input-buttons">
                <Face size={25} />
                <Attach size={25} />
                <Send size={25} />
            </div>
        </div>
            
        )
    }
}
