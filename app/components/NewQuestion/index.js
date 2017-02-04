import React, { Component } from 'react';
import block from 'bem-cn';

import resources from './resources';

import {
    TEST_TYPES,
    CHOOSE_ANSWER
} from '../../constants/tests';

const b = block('NewQuestion');

export default class NewQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: CHOOSE_ANSWER
        };
    }

    render() {
        const {
            className,
            language
        } = this.props;
        const { type } = this.state;

        return (
            <section className={b.mix(className)}>
                <select value={type}>
                    {TEST_TYPES.map((item) =>
                        <option key={item} value={item}>
                            {resources[language][item]}
                        </option>
                    )}
                </select>
            </section>
        )
    }
}