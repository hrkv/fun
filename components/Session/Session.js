import React from 'react';
import Action from '../Action/Action';

const Session = ({ actions, onIgnoreClick }) =>
    <table className="Session">
        <tbody>
        {actions.map((action, index) =>
            <tr>
                <Action key={index} {...action} onIgnoreClick={onIgnoreClick} />
            </tr>
        )}
        </tbody>
    </table>;

export default Session;