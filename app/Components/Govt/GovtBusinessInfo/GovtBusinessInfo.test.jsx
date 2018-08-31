import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import GovtBusinessInfo from './GovtBusinessInfo';

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


describe('Test suits for <GovtBusinessInfo />', () => {
    const mockStore = configureStore([]);
    const store = mockStore(customerDetails);
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store} actions={{ addCallerContact }} >
                <GovtBusinessInfo />
            </Provider>,
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should load the GovtBusinessInfo component', () => {
        expect(wrapper).to.exist;
        expect(wrapper).to.have.length(1);
    });

    it('should equal to "Tell us about your organization" ', () => {
        expect(wrapper.find('.formOutterWrap').length).to.equal(1);
        expect(wrapper.find('.GovHeaderTxtWrap').text()).to.equal('Tell us about your organization');
    });


    it('should find not empty values', () => {
        const govForm = wrapper.find('form').first();
        const input1 = govForm.find("input[name='comPhoneText1']").at(0);
        expect(input1.length).to.equal(1);
        expect(input1.prop('value')).to.be.equal('');
    });

    it('should find submit the form', () => {
        const govForm = wrapper.find('form').first();
        const formBtn = govForm.find('.formBtn').at(0);
        // formBtn.simulate('submit');
        const errorTxt = govForm.find('.errorTxt');
        // console.log( formBtn.debug());
        // console.log(wrapper.debug());
        // expect(govForm.find(".errorTxt").at(0)).to.be.equal(1);
    });


    // it('should GovtBusinessInfo without searchlist', () => {
    //     const isEditCase = true;
    //     const shallowWrapper = shallow(<GovtBusinessInfo
    //         contactDetails={customerDetails}
    //         actions={{ addCallerContact }}
    //         isEditCase={isEditCase}
    //     />);
    //     shallowWrapper.instance().toggleBox({ target: { value: true } });
    // });
});
