import React, { Component, Fragment } from 'react';
import {
    ControlLabel, FormGroup, FormControl, Button,
} from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import './Signup.scss';
import history from '../../history';
import logofavicon from '../../../assets/Images/overstock_favicon.png';

export const validate = (values) => {
    const error = {};
    /* eslint max-len: ["error", { "ignoreRegExpLiterals": true }] */
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailPasswordPattern = /^[a-zA-Z0-9]{8,16}$/g;
    const validEmail = emailPattern.test(values.email);
    // eslint-disable-next-line
    const validPwd = emailPasswordPattern.test(values.password);
    if (!values.email) {
        error.email = 'Required';
    } else if (!validEmail) {
        error.email = 'Please Enter a Valid Email';
    }

    if (!values.password) {
        error.password = 'Required';
    } else if (values.password.length < 8) {
        error.password = 'Password should be greater than 8';
    } else if (values.password.length > 15) {
        error.password = 'Password should be lesser than 16';
    }
    return error;
};


/* eslint-disable react/prop-types */
export const renderField = ({
    label, type, input,
    meta: { touched, error },
}) => (
    <Fragment>
        <FormGroup className="formRowWrap">
            <ControlLabel className="labelTxt">
                {label}
            </ControlLabel>
            <FormControl
                {...input}
                type={type}
                autoComplete="off"
                className="inputTxtStyle" />
            {touched && (error && (
                <span className="errorTxt">
                    {error}
                </span>
            ))}
        </FormGroup>
    </Fragment>);

class SignupForm extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.escFunction, false);
    }

    onSubmitCall = (values) => {
        const { email } = values;
        const qualifiedGovId = ['.gov', '.mil', '.state', '.edu'];
        let getDomain = email.substring(email.lastIndexOf('.'));
        getDomain = getDomain.toLowerCase();
        if (qualifiedGovId.includes(getDomain)) {
            history.push('/gov');
        } else {
            history.push('/com');
        }
    }

    escFunction(event) {
        if (event.keyCode === 32) {
            event.preventDefault();
        }
    }

    render() {
        const { handleSubmit } = this.props;

        const handlePagesOnSubmit = (values) => {
            this.onSubmitCall(values);
        };
        return (

            <div className="formWrap">
                <h1 className="signupTitle_1">
                    <img src={logofavicon} alt="" />
                    <br/>
                    New to Overstock professional? Sign Up.
                </h1>
                <form onSubmit={handleSubmit(handlePagesOnSubmit)}>
                    <Field
                        name="email"
                        component={renderField}
                        type="text"
                        label="Email"/>
                    <Field
                        name="password"
                        component={renderField}
                        type="password"
                        label="Create Password"/>
                    <div className="form-group formRowWrap">
                        <Button
                            type="submit"
                            className="btnBlueStyle createAccBtn">
                        Create Account

                        </Button>
                    </div>
                </form>
                <p className="signInTxt">
                    Already a member of Overstock Professional?
                    <a onClick={() => history.push('/login')}>Sign In </a>
                </p>
            </div>
        );
    }
}

export default reduxForm({
    form: 'SignupForm',
    validate,
})(SignupForm);
