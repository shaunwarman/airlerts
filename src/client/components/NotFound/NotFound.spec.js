import React from 'react';
import createComponent from 'react-unit';
import test from 'tape';

import NotFound from './NotFound.js';

test('Testing: NotFound', (t) => {
    const component = createComponent(<NotFound test='true' />).originalComponentInstance;
    t.equal(component.props.test, 'true', 'default props should equal empty');
    t.end();
});
