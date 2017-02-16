import React, { Component } from 'react';
import block from 'bem-cn';

import resources from './resources';

const b = block('TestMeta');

export default class TestMeta extends Component {
    render() {
        const {
            className,
            language
        } = this.props;

        return (
            <div className={b.mix(className)} >
                <input
                    className={b('title')}

                    type="text"
                    placeholder={resources[language]['title']}
                />

                <textarea
                    className={b('description')}

                    type="text"
                    placeholder={resources[language]['description']}
                />

                <input
                    className={b('limit')}

                    type="number"
                    placeholder={resources[language]['limit']}
                />
            </div>
        )
    }
}