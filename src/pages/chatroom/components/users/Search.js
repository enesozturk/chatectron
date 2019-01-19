import React, { Component } from 'react'

import anime from 'animejs'

export default class Search extends Component {
    handleOnInputFocus = (status) => {
        const input = document.querySelector(".search-box--input")
        if (status) {
            anime({
                targets: input,
                background: 'rgba(0,0,0,0.3)',
                duration: 300,
                easing: 'linear'
            })
        } else {
            anime({
                targets: input,
                background: 'rgba(0,0,0,0.05)',
                duration: 300,
                easing: 'linear'
            })
        }
    }

    render() {
        return (
            <div className="search-box">
                <input className="search-box--input" type="text" placeholder="Ara" onFocus={() => this.handleOnInputFocus(true)} onBlur={() => this.handleOnInputFocus(false)} />
            </div>
        )
    }
}
