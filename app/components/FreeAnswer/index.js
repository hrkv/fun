import React, { Component } from 'react';
import block from 'bem-cn';

import resources from './resources';

const b = block('FreeAnswer');

export default class FreeClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.description || ''
        }
    }

    renderEdit() {
        const { 
            language, 
            description 
        } = this.props;
        
        return (
            <section className={b}>
                <textarea
                    className={b('description', { edit: true })}
                    placeholder={resources[language]['description']}
                >
                    {description}
                </textarea>
            </section>
        )
    }

    renderStatic() {
        const {
            language,
            description
        } = this.props;

        return (
            <section className={b}>
                <div className={b('description')}>
                    {description}
                </div>
                
                <textarea
                    className={b('answer')}
                    placeholder={resources[language]['answer']}
                />
            </section>
        )
    }

    render() {
        const { editMode } = this.props;
        return editMode ? this.renderEdit() : this.renderStatic();
    }
}