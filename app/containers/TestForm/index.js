import React, { Component } from 'react';
import { connect } from 'react-redux';
import block from 'bem-cn';

import TestMeta from '../../components/TestMeta';
import NewQuestion from '../../components/NewQuestion';

const b = block('TestForm');

class TestForm extends Component {
    render() {
        const {
            meta,
            questions,
            language
        } = this.props;

        return (
            <div className={b}>
                <TestMeta
                    className={b('meta')}
                    language={language}
                    {...meta}
                />

                {questions.map((question, index) =>
                    <question.Type
                        key={index}
                        {...question}
                    />)
                }

                <NewQuestion
                    className={b('addQuestion')}
                    language={language}
                />
            </div>
        )
    }
}

export default connect((state) => {
    const { test, language} = state;

    return {
        meta: test ? test.meta : {},
        questions: test ? test.questions : [],
        language
    };
})(TestForm);