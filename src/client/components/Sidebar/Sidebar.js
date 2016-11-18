import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './styles.module.css';

/**
 * @extends {Component}
 */
export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: true
        };
    }

    render() {
        const { expand } = this.state;
        return (<aside className = {styles.sidebar}>
            <button className = { styles.expandButton }
                onClick = { () => this.setState({
                    expand: !this.state.expand
                }) }>
                <i className = {`fa ${expand ?
                    'fa-toggle-left' :
                    'fa-toggle-right'}
                    fa-2x aria-hidden="true"` }>
                </i>
            </button>
            <Link to="/history">
                <i className="fa fa-pie-chart fa-2x" aria-hidden="true"></i>
                { expand ? <p>Versions</p> : null }
            </Link>
        </aside>);
    }
}

Sidebar.propTypes = {};

Sidebar.defaultProps = {};
