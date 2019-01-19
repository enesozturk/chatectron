import React, { Component } from 'react'
import Add from 'react-icons/lib/md/add'
import MoreVert from 'react-icons/lib/md/more-vert'

export default class TopBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="brand-name">
                    <span>Chatectron</span>
                </div>
                <div className="top-bar--icons">
                    <Add className="add" size={25} fontWeight={400} />
                    <MoreVert size={20} />
                </div>
            </div>
        )
    }
}
