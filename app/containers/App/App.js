import React from 'react';
import { connect } from 'react-redux';

import TestForm from '../TestForm';
import Header from '../../components/Header';

const mapStateToProps = ({ page }) => ({ current: page.current });

const App = connect(mapStateToProps)
    (({ current, onMenuItemClick, onGetDataClick }) =>
    <div className="App">
        <Header />
        <TestForm />
    </div>);

export default App;