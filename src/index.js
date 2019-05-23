import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import TabBarCom from './components/TabBar/TabBar'
import * as serviceWorker from './serviceWorker';

import {HashRouter} from 'react-router-dom'
import AppRouter from './router/router'


ReactDOM.render(
    <HashRouter>
        <AppRouter/>
        <TabBarCom/>
    </HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
