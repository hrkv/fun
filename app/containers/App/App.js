import React from 'react';
import { connect } from 'react-redux';

import TestForm from '../TestForm';

const mapStateToProps = ({ page }) => ({ current: page.current });

const App = connect(mapStateToProps)
    (({ current, onMenuItemClick, onGetDataClick }) =>
    <div className="App">
        <TestForm />
    </div>);

export default App;