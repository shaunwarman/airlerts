import React from 'react';
import createComponent from 'react-unit';
import test from 'tape';

import InternalError from './InternalError.js';

test('Testing: InternalError', (t) => {
    const component = createComponent(<InternalError test='true' />).originalComponentInstance;
    t.equal(component.props.test, 'true', 'default props should equal empty');
    t.end();
});
