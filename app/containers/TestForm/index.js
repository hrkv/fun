import React, { Component } from 'react';
import { connect } from 'react-redux';
import block from 'bem-cn';

import { updateDraft, saveDraft } from '../../actions/test';

import resources from './resources';
import getQuestionClass from '../../lib/getQuestionClass';

import TestMeta from '../../components/TestMeta';
import NewQuestion from '../../components/NewQuestion';

const b = block('TestForm');

class TestForm extends Component {
    render() {
        const {
            meta,
            questions,
            language,
            onDraftChange,
            onAddNewQuestion
        } = this.props;

        return (
            <div className={b}>
                <TestMeta
                    className={b('meta')}
                    language={language}
                    {...meta}
                />

                {questions.map((question, index) => {
                    const QuestionClass = getQuestionClass(question.type);

                    return (
                        <QuestionClass
                            key={index}
                            {...question}
                        />
                    )})
                }

                <NewQuestion
                    language={language}
                    className={b('newQuestion')}
                    onDraftChange={onDraftChange}
                />
                
                <button
                    className={b('addQuestion')}
                    onClick={onAddNewQuestion}
                >
                    {resources[language]['addQuestion']}
                </button>
            </div>
        )
    }
}

const stateToProps = (state) => {
    const { test, language} = state;

    return {
        meta: test ? test.meta : {},
        questions: test ? test.questions : [],
        language
    };
};

const dispatchToProps = (dispatch) => ({
    onDraftChange: (draft) => dispatch(updateDraft(draft)),
    onAddNewQuestion: () => dispatch(saveDraft())
});

export default connect(stateToProps, dispatchToProps)(TestForm);