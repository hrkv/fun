import React from 'react';
import Question from '../extends/Question';
import block from 'bem-cn';

import resources from './resources';
import { CHOOSE_ANSWER } from '../../constants/questions';

const b = block('ChooseAnswer');
const bVariant = b('variant').toString();
const bDescription = b('description').toString();

export default class ChooseAnswer extends Question {
    constructor(props) {
        super(props);

        const {
            language,
            variants,
            description
        } = props;

        this.type = CHOOSE_ANSWER;
        this.state = {
            variants: variants || [
                `${resources[language]['variant']} 1`,
                `${resources[language]['variant']} 2`
            ],
            description: description || ''
        };

        this.onAddVariant = this.onAddVariant.bind(this);
        this.onChangeVariant = this.onChangeVariant.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
    }

    onAddVariant() {
        const { language } = this.props;
        const { variants } = this.state;

        this.setState({
            variants: [
                ...variants,
                `${resources[language]['variant']} ${variants.length + 1}`
            ]
        });
    }

    onChangeVariant({ target }) {
        const { name, value } = target;
        const variants = [...this.state.variants];

        variants[name] = value;
        this.setState({ variants });
    }

    onChangeDescription({ target }) {
        const { value } = target;
        const description = value;

        this.setState({ description: value });
    }

    renderEdited() {
        const { language } = this.props;
        const { variants, description } = this.state;

        return (
            <section className={b({ edit: true })}>
                <textarea
                    onChange={this.onChangeDescription}
                    className={bDescription}
                    placeholder={resources[language]['description']}
                >
                    {description}
                </textarea>
                
                {variants.map((variant, index) => (
                    <input
                        className={bVariant}
                        type="text"
                        name={index}
                        value={variant}
                        onChange={this.onChangeVariant}
                    />
                ))}
                
                <button onClick={this.onAddVariant}>
                    {resources[language]['addVariant']}
                </button>
            </section>
        )
    }

    renderStatic() {
        const { variants, description } = this.props;
        const uniqName = Math.round().toString();

        return (
            <section className={b}>
                <div className={bDescription}>
                    {description}
                </div>

                {variants.map((variant, index) => (
                    <label>
                        <input
                            type="radio"
                            value={index}
                            name={uniqName}
                        />
                        {variant}
                    </label>
                ))}
            </section>
        )
    }

    render() {
        const { editMode } = this.props;

        return editMode ? this.renderEdited() : this.renderStatic();
    }
}

ChooseAnswer.defaultProps = {
    
}