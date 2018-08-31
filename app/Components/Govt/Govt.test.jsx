import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Govt from './Govt';

const customerDetails = {
    name: 'test user',
    categorys: 'test categorys',
    agency: 'test agency ',
    title: 'test title',
    Email: 'title@email.com',
    comPhoneText1: '-1',
    comPhoneText2: '-1',
    comPhoneText3: '-1',
    Address: 'Los Angeles',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90111',
};


const addCallerContact = sinon.spy;

describe('Test case  for <Govt />', () => {
    const mockStore = configureStore([]);
    const store = mockStore(customerDetails);
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store} actions={{ addCallerContact }} >
                <Govt />
            </Provider>,
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });


    it('should load the HeaderComponent component', () => {
        expect(wrapper).to.exist;
        // expect(wrapper).to.have.length(1);
    });

    it('should load the class stepProgressWrap  Step 1', () => {
        const Stepper = wrapper.find('Stepper');
        const Step = Stepper.find('Step').at(0).prop('active');
        expect(Stepper).to.have.length(1);
        expect(Step).to.equal(true);
    });


    it('should load the class stepProgressWrap Step 2 ', () => {
        const Stepper = wrapper.find('Stepper');
        const Step2 = Stepper.find('Step').at(1).prop('active');
        expect(Stepper).to.have.length(1);
        expect(Step2).to.equal(false);
    });

    it('should find the onSubmit ', () => {
        const formOutterWrap = wrapper.find('.formOutterWrap');
        const formOutterWrapForm = formOutterWrap.find('form');
        // formOutterWrapForm.simulate('submit');
        // console.log( formOutterWrapForm.debug() );
        expect(formOutterWrapForm).to.have.length(1);
    });
});
