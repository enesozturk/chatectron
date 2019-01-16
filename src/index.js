import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { store } from './store'
import Login from './pages/Login'
import ChatRoom from './pages/ChatRoom'

import css from './style/main.scss'

class CheckLoginComp extends React.PureComponent {
    render() {
        const user = localStorage.getItem('user')
        if (user) return <ChatRoom />
        else return <Login />
    }
}

const CheckLogin = connect(state => {
    return {
        user: state.user
    }
})(CheckLoginComp)

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <CheckLogin />
            </Provider>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
