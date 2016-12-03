import React from 'react';
import { connect } from 'react-redux';

import { addActionToBlackList } from '../../actions/dictionary';

import Session from '../../components/Session/Session';

const mapStateToProps = ({ history, dictionary }) => ({
    sessions: history.sessions.map((sesion) =>
        ({
            ...sesion,
            actions: sesion.actions.filter(({ type }) => !dictionary.blackList[type])
        }))
});

const mapDispatchToProps = (dispatch) => ({
    onIgnoreClick: (type) => {
        dispatch(addActionToBlackList(type))
    }
});

const History = connect(mapStateToProps, mapDispatchToProps)(({ sessions, onIgnoreClick }) =>
    <div className="History">
        {sessions.map((session, index) => 
            <Session key={index} {...session} onIgnoreClick={onIgnoreClick} />)}
    </div>);

export default History;