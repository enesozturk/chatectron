import React, { Component } from 'react'

import People from 'react-icons/lib/md/people'
import Contacts from 'react-icons/lib/md/contacts'
import Archive from 'react-icons/lib/md/archive'

export default class Tabs extends Component {
    render() {
        return (
            <div className="tabs">
                <People className="active" />
                <Contacts />
                <Archive />
            </div>
        )
    }
}
