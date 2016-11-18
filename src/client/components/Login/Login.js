import React, { Component } from 'react';

import { login } from '../../models/auth';

import styles from './styles.module.css';

/**
 * Login component
 * @extends {Component}
 */
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            username: null,
            password: null,
            debounce: false
        };
    }

    componentWillMount() {}

    updateUsername(event) {
        const username = event.target.value;
        this.setState({ username });
    }

    updatePassword(event) {
        const password = event.target.value;
        this.setState({ password });
    }

    submit(event) {
        event.preventDefault();

        if (!this.state.debounce) {
            const { username, password } = this.state;

            const encoded = btoa(`${username}:${password}`);

            login(encoded, (error, response) => {
                if (error || !response.ok) {
                    this.setState({
                        error: true,
                        message: response.message
                    });
                } else {
                    sessionStorage.__LOGGEDIN__ = true;
                    this.setState({
                        error: false,
                        message: response.message,
                    });
                    this.props.history.push('/home');
                }
            });
        }
    }

    render() {
        let errorMsg = null;

        // pull into own component
        if (this.state.error) {
            errorMsg = (
              <div className={styles.errormessage}>
                  {this.state.message}
              </div>
            );
        }

        return (
            <div className = { `${styles.loginarea} ${styles[this.state.theme]}` }>
                {errorMsg}
                <div>
                    <div>
                        <span className = {styles.inputtitle}>Username:</span>
                    </div>
                    <div>
                        <input className = {styles.logininput}
                               type="text"
                               onChange={this.updateUsername.bind(this)} />
                    </div>
                </div>
                <div>
                    <div>
                        <span className = {styles.inputtitle}>Password:</span>
                    </div>
                    <div>
                        <input className = {styles.logininput}
                               type="password"
                               onChange={this.updatePassword.bind(this)} />
                    </div>
                </div>
                <div>
                    <div>
                        <button className = {styles.loginbutton}
                                type="button"
                                onClick={this.submit.bind(this)} >Submit</button>
                    </div>
                    <div>
                        <button className = {styles.loginbutton}
                                type="button"
                                onClick={this.submit.bind(this)} >Sign-up!</button>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {};

Login.defaultProps = {};
