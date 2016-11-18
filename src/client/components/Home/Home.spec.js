import React from 'react';
import createComponent from 'react-unit';
import test from 'tape';

import Home from './Home.js';

test('Testing: Home', (t) => {
    const component = createComponent(<Home test='true' />).originalComponentInstance;
    t.equal(component.props.test, 'true', 'default settings should be empty');
    t.end();
});
