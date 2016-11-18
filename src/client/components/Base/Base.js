import React, { Component, cloneElement } from 'react';

import styles from './styles.module.css';

import Header from '../Header/Header';

/**
 * Base component
 * @extends Component
 */
export default class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: []
        };
    }

    render() {
        let children = null;
        if (this.props.children) {
            children = cloneElement(this.props.children);
        }
        return (
            <div className = { styles.base }>
                <Header />
                { children }
            </div>
        );
    }
}

Base.propTypes = {};

Base.defaultProps = {};
