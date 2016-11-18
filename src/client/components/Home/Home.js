import React, { Component } from 'react';

import { test } from '../../models/auth';

import styles from './styles.module.css';

/**
 * @extends {Component}
 */
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        if (!sessionStorage.__LOGGEDIN__) {
            this.props.history.push('/login');
            return;
        }
        // preferences((error, response) => {
        //     if (error || !response.ok) {
        //         this.props.history.push('/login');
        //         return;
        //     }
        //     console.log(`Res: ${JSON.stringify(response)}`);
        // });
    }

    render() {
        return (
            <div className={ styles.homearea }>
                Welcome, Home!
            </div>
        );
    }
}

Home.propTypes = {};

Home.defaultProps = {};
