import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Users extends Component {

    render() {
        return (
            <div className="users">
                <div className="user-list">
                    <ul>
                        <li>Berkay</li>
                        <li>İrem</li>
                        <li>Burak</li>
                    </ul>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
