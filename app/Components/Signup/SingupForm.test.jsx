import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import SignupForm, {
    validate,
} from './SignupForm';
// maxValue,

describe('Test suits for <Corporation />', () => {
    let component;
    // const submitCase = sinon.spy();
    let wrapperRedComp;
    beforeEach(() => {
        const mockStore = configureStore([]);
        const store = mockStore({
            context: { deviceType: { isDesktop: false } },
        });
        const handleSubmit = sinon.spy();
        wrapperRedComp = shallow(<SignupForm
            handleSubmit={handleSubmit}
            // submitCase={submitCase}
        />);
        component = mount(
            <Provider store={store}>
                <SignupForm submitCase={handleSubmit}/>
            </Provider>,
        );
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

    //     { /* it('Should be called positiveValue with value', () => {
    // const aptError = positiveValue(123);
    // expect(aptError).to.equal(undefined);
    // });

    // it('Should be called positiveValue with value', () => {
    // const aptError = positiveValue(-1);
    // expect(aptError).to.equal('Must be positive values');
    // });

    // it('Should be called exact minValue', () => {
    // let minObj = minValue(1234);
    // console.log('minObj$$$$$$$$$$$', minObj);
    // let aptError = minObj(3);
    // expect(aptError).to.equal(undefined);
    // minObj = minValue(11);
    // aptError = minObj(3);
    // expect(aptError).to.equal('Must be at least 3');
    // }); */ }

    // it('Should be called less the minValue', () => {
    // const minObj = minValue(4);
    // const aptError = minObj(123);
    // expect(aptError).to.equal('Must be at least 4');
    // });

    // it('Should be called maxValue with value', () => {
    // const aptError = maxValue(5, 123456);
    // expect(aptError).to.equal('Must be 5 characters or less');
    // });

    //     { /* it('inValid Email', () => {
    // const aptError = validate({ email: '' });
    // expect(aptError.email).to.equal('Required');
    // });

    // it('inValid Email', () => {
    // const aptError = validate({ email: 'Overstock@' });
    // expect(aptError.email).to.equal('Please Enter a Valid Email');
    // }); */ }

    // it('On Custom phoneChange', () => {
    // // { event: { target: { name: 'comPhoneText1', value: '123' } } }
    // // const instance = component.instance();
    // wrapperRedComp.find('.CustomPhone').at(0).simulate('onKeyUp');
    // });

// it('Should be called normalizeZip with value', () => {
// const instance = component.instance();
// instance.normalizeZip('name');
// // expect(aptError).to.exist();
// });
});
