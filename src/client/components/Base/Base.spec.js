import React from 'react';
import createComponent from 'react-unit';
import test from 'tape';

import Base from './Base.js';

test('Testing: Base', (t) => {
    const component = createComponent(<Base test='true' />).originalComponentInstance;
    t.equal(component.props.test, 'true', 'default props should be empty');
    t.end();
});
