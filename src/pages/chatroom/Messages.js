import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Messages extends Component {

    render() {
        return (
            <div className="messages">
                <div className="message-list">

                </div>
                <div className="message-input-container">
                    <input type="text" className="message-input" />
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
