import React, { Component } from 'react';
import block from 'bem-cn';

import resources from './resources';
import getQuestionClass from '../../lib/getQuestionClass';

import {
    QUESTIONS_TYPES,
    CHOOSE_ANSWER
} from '../../constants/questions';

const b = block('NewQuestion');

export default class NewQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = { type: CHOOSE_ANSWER };
        this.onQuestionTypeChange = this.onQuestionTypeChange.bind(this);
    }

    onQuestionTypeChange({ target }) {
        this.setState({ type: target.value });
    }

    render() {
        const {
            draft,
            language,
            className,
            onDraftChange,
        } = this.props;
        
        const { type } = this.state;
        const QuestionClass = getQuestionClass(type);

        return (
            <section className={b.mix(className)}>
                <select
                    value={type}
                    className={b('typeSelector')}
                    onChange={this.onQuestionTypeChange}
                >
                    {QUESTIONS_TYPES.map((item) =>
                        <option key={item} value={item}>
                            {resources[language][item]}
                        </option>
                    )}
                </select>
                
                <QuestionClass
                    editMode
                    {...draft}
                    language={language}
                    onChange={onDraftChange}
                />
            </section>
        )
    }
}