import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: { hasError: false, value: "" },
        }
    }

    handleStartChat = () => {
        this.props.login(this.state.username.value)
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: { hasError: false, value: e.target.value }
        });
    }

    render() {
        return (
            <div className="login login-page">
                <div className="form">
                    <span className="title">What's your nickname?</span>
                    <input name="username" value={this.state.username.value} onChange={this.handleOnChange} className="input input--username" type="text" maxLength="25" placeholder="Type an username to start chat..." />
                    <button onClick={this.handleStartChat} className="button button--start-chat">Sign In</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
    login: payload=>
    dispatch({type:"LOGIN", payload})
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
