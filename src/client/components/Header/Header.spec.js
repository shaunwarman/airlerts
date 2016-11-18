import React from 'react';
import createComponent from 'react-unit';
import test from 'tape';

import Header from './Header.js';

test('Testing: Header', (t) => {
    const component = createComponent(<Header test='true' />).originalComponentInstance;
    t.equal(component.props.test, 'true', 'default props should equal empty');
    t.end();
});
