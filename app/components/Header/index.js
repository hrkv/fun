import React, { Component } from 'react';
import block from 'bem-cn';

const b = block('Header');

export default class Header extends Component {
    render() {
        return (
            <div className={b}>
                <h1 className={b('logo')}>
                    Test me again
                </h1>
            </div>
        )
    }
}