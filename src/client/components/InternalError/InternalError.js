import React, { Component } from 'react';

import styles from './styles.module.css';

/**
 * @extends {Component}
 */
export default class InternalError extends Component {

    render() {
        return (<main className = { styles.notfound }>
            <h2>500</h2>
            <h3>Internal Error</h3>
            <p>Whoopsie Daisy.</p>
        </main>);
    }
}

InternalError.propTypes = {};

InternalError.defaultProps = {};
