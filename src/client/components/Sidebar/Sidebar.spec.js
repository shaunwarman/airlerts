import React from 'react';
import createComponent from 'react-unit';
import test from 'tape';

import Sidebar from './Sidebar.js';

test('Testing: Sidebar', (t) => {
    const component = createComponent(<Sidebar test='true' />).originalComponentInstance;
    t.equal(component.props.test, 'true', 'default props should equal empty');
    t.end();
});
