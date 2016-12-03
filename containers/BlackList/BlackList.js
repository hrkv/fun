import React from 'react';
import { connect } from 'react-redux';

import { removeActionFromBlackList } from '../../actions/dictionary';

import BlackListItem from '../../components/BlackListItem/BlackListItem';

const mapStateToProps = ({ dictionary }) => ({
    items: Object.keys(dictionary.blackList).filter((key) => 
        dictionary.blackList[key])
});

const mapDispatchToProps = (dispatch) => ({
    onDeleteClick: (type) => {
        dispatch(removeActionFromBlackList(type))
    }
});

const BlackList = connect(mapStateToProps, mapDispatchToProps)(({ items, onDeleteClick }) =>
    <div className="BlackList">
        {items.map((type) =>
            <BlackListItem key={type} type={type} onDeleteClick={onDeleteClick} />)}
    </div>);

export default BlackList;