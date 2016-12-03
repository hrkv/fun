import React from 'react';
import { connect } from 'react-redux';

import { setPage } from '../../actions/page';
import { HISTORY, BLACKLIST } from '../../constants/page';

import MainMenu from '../../components/MainMenu/MainMenu';
import History from '../History/History';
import BlackList from '../BlackList/BlackList';

const mapStateToProps = ({ page }) => ({ current: page.current });
const mapDispatchToProps = (dispatch) => ({
    onMenuItemClick: (page) => {
        dispatch(setPage(page))
    }
});

const App = connect(mapStateToProps, mapDispatchToProps)(({ current, onMenuItemClick }) =>
    <div className="App">
        <MainMenu onMenuItemClick={onMenuItemClick} />
        {current === HISTORY && <History />}
        {current === BLACKLIST && <BlackList />}
    </div>);

export default App;