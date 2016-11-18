import React from 'react';
import createComponent from 'react-unit';
import test from 'tape';

import Login from './Login.js';

test('Testing: Login', (t) => {
    const component = createComponent(<Login test='true' />).originalComponentInstance;
    t.equal(component.props.test, 'true', 'default settings should be empty');
    t.end();
});
