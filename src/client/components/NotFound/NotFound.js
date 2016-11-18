import React, { Component } from 'react';

import styles from './styles.module.css';

/**
 * @extends {Component}
 */
export default class NotFound extends Component {
    render() {
        return (<main className = { styles.notfound }>
            <h2>404</h2>
            <h3>Not Found</h3>
            <p>Not all those that wander are lost.</p>
            <p>But <i>you</i> might be.</p>
        </main>);
    }
}

NotFound.propTypes = {};

NotFound.defaultProps = {};
