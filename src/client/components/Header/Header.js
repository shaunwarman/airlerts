import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './styles.module.css';

/**
 * @extends {Component}
 */
export default class Header extends Component {

    render() {
        return (
            <header>
                <div className = { styles.logo }>
                    <Link to="/home">
                        <h1><span className={ styles.title }>Airlerts</span></h1>
                    </Link>
                </div>
            </header>
        );
    }
}

Header.propTypes = {};

Header.defaultProps = {};
