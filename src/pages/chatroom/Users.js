import React, { Component } from 'react'
import { connect } from 'react-redux'

import TopBar from './components/users/TopBar'
import Search from './components/users/Search'
import Tabs from './components/users/Tabs'
import UserList from './components/users/UserList'

export class Users extends Component {

    render() {
        return (
            <div className="users">
                <TopBar />
                <Search />
                <Tabs />
                <UserList />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
