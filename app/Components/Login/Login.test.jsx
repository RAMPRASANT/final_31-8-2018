import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import LoginPage, {
    validate, Login,
} from './Login';
// minValue, maxValue,

describe('Test suits for <LoginPage />', () => {
    let component;
    let wrapperRedComp;
    beforeEach(() => {
        const mockStore = configureStore([]);
        const store = mockStore({});
        const handleSubmit = sinon.spy();
        wrapperRedComp = shallow(<Login
            handleSubmit={handleSubmit}/>);
        component = mount(
            <Provider store={store}>
                <LoginPage handleSubmit={handleSubmit}/>
            </Provider>,
        );
    });

    afterEach(() => {
        component.unmount();
    });

    it('Check if the werapper component exist', () => {
        expect(wrapperRedComp).to.exist;
    });

    it('inValid Email', () => {
        const aptError = validate({ email: '' });
        expect(aptError.email).to.equal('Required');
    });

    it('inValid Email', () => {
        const aptError = validate({ email: 'Overstock@' });
        expect(aptError.email).to.equal('Please Enter a Valid Email');
    });

    it('inValid Password', () => {
        const aptError = validate({ password: '' });
        expect(aptError.password).to.equal('Required');
    });

    it('inValid Password', () => {
        const aptError = validate({ password: '' });
        expect(aptError.password).to.equal('Required');
    });

    it('inValid Password', () => {
        const aptError = validate({ password: '1234567' });
        expect(aptError.password).to.equal('Password should be greater than 8');
    });

    it('inValid Password', () => {
        const aptError = validate({ password: '1234567890123456' });
        expect(aptError.password).to.equal('Password should be lesser than 16');
    });

    it('login page API called and UI should render', () => {
        const instance = wrapperRedComp.instance();
        const keyCode = sinon.spy();
        const preventDefault = sinon.spy();
        instance.callback();
        instance.verifyCallback();
        // instance.goToForgot(getEmailId);
        // instance.goToB2BMigration(loginValues);
        instance.goToCreateAccount();
        instance.escFunction(keyCode, preventDefault);
    });
});
