import React, { Component } from 'react';
import './Styling.css'
import style from './Styling.module.css'

export default class Styling extends Component {
    render() {

        const styleText = {
            color: 'white',
            padding: '15px',
            backgroundColor: 'black'
        }

        return (
            <div>
                <p className='txt'>Hello Hien</p>
                <p className={style.txtStyle}>Hello Duyen</p>
                <p style={styleText}>Hello Tue Lam</p>
            </div>
        )
    }
}
