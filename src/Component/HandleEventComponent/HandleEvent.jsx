import React, { Component } from 'react'

export default class HandleEvent extends Component {

    //Định nghĩa sự kiwwn khi click vào btn
    handleClick = ()=>{
        alert('Hello')
    }


    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}
