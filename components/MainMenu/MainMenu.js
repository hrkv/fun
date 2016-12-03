import React from 'react';

import { HISTORY, BLACKLIST } from '../../constants/page';

const MainMenu = ({ onMenuItemClick }) =>
    <menu className="MainMenu">
        <button 
            className="MainMenu__item"
            onClick={() => onMenuItemClick(HISTORY)}
        >
            History
        </button>
        <button 
            className="MainMenu__item"
            onClick={() => onMenuItemClick(BLACKLIST)}
        >
            Ignore list
        </button>
    </menu>;

export default MainMenu;