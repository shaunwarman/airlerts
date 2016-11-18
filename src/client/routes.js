import React from 'react';
import { browserHistory, IndexRedirect, Router, Route } from 'react-router';

import Base from './components/Base/Base';
import Home from './components/Home/Home';
import InternalError from './components/InternalError/InternalError';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';

export default (
    <Router history={ browserHistory }>
        <Route path="/" component={ Base }>
            <IndexRedirect to='/login' />
            <Route path='/home' components={ Home } />
            <Route path='/login' components={ Login } />
            <Route path='/500' component={ InternalError } />
            <Route path='*' component={ NotFound } />
        </Route>
    </Router>
);
