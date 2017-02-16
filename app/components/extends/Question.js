import React, { Component } from 'react';

export default class Question extends Component {
    componentDidMount() {
        if (this.props.editMode) {
            this.updateDraft(this.state);
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.props.editMode) {
            this.updateDraft(nextState);
        }
    }

    updateDraft(state) {
        this.props.onChange({
            ...state,
            type: this.type
        });
    }
}