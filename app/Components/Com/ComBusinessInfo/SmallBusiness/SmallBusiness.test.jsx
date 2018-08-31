import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import SmallBusiness, {
    required, positiveValue,
    validate,
} from './SmallBusiness';
// minValue, maxValue,

describe('Test suits for <SmallBusiness />', () => {
    let component;
    const submitCase = sinon.spy();
    let wrapperRedComp;
    beforeEach(() => {
        const mockStore = configureStore([]);
        const store = mockStore({});
        const handleSubmit = sinon.spy();
        wrapperRedComp = shallow(<SmallBusiness
            handleSubmit={handleSubmit}
            submitCase={submitCase}/>);
        component = mount(
            <Provider store={store}>
                <SmallBusiness submitCase={handleSubmit}/>
            </Provider>,
        );
    });

    it('Check if the werapper component exist', () => {
        expect(wrapperRedComp).to.exist;
    });

    it('Should be called required with value', () => {
        const aptError = required('name');
        expect(aptError).to.equal(undefined);
    });

    it('Should be called positiveValue with value', () => {
        const aptError = positiveValue(123);
        expect(aptError).to.equal(undefined);
    });

    it('Should be called positiveValue with value', () => {
        const aptError = positiveValue(-1);
        expect(aptError).to.equal('Must be positive values');
    });

    // it('Should be called minValue with value', () => {
    // const aptError = minValue(12);
    // expect(aptError).to.equal(undefined);
    // });

    // it('Should be called maxValue with value', () => {
    // const aptError = maxValue(5, 123456);
    // expect(aptError).to.equal('Must be 5 characters or less');
    // });

    it('inValid Email', () => {
        const aptError = validate({ email: '' });
        expect(aptError.email).to.equal('Required');
    });

    it('inValid Email', () => {
        const aptError = validate({ email: 'Overstock@' });
        expect(aptError.email).to.equal('Please Enter a Valid Email');
    });

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
