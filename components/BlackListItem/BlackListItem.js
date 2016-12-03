import React from 'react';

const BlackListItem = ({ type, onDeleteClick }) =>
    <div className="BlackListItem">
        <span className="BlackListItem__name">{type}</span>
        <button onClick={() => onDeleteClick(type)}>remove</button>
    </div>;

export default BlackListItem;