import React, { Component } from 'react';

export default class Action extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false
        };
    }

    render() {
        const { type, payload, onIgnoreClick } = this.props;
        const { opened } = this.state;
        const payloadIsDefined = payload !== null && payload !== undefined;
        
        return (
            <td className="Action">
                <div className="Action__title">
                    <span className="Action__name">{type}</span>
                </div>
                <div className="Action__toolbar">
                    {payloadIsDefined &&
                        <button
                            className="Action__dataToggler"
                            onClick={() => this.setState({ opened: !opened })}
                        >
                            show data
                        </button>
                    }
                    <button
                        className="Action__ignore"
                        onClick={() => onIgnoreClick(type)}
                    >
                        ignore
                    </button>
                </div>
                {payloadIsDefined &&
                    <div className="Action__dataContainer">
                    {opened &&
                        <pre className="Action__data">
                            {JSON.stringify(payload, "", 4)}
                        </pre>
                    }
                    </div>
                }
            </td>
        )
    }
}