
import React from 'react';
import { mount, configure , shallow } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import tableWrapper from './table';

configure({ adapter: new Adapter() });

const customerDetails = {
    pathname: '/signup,/shop-yesno',
};

describe('Test suits for <table />', () => {
    const mockStore = configureStore([]);
    const store = mockStore(customerDetails);
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <Provider store={store} >
                <tableWrapper />
            </Provider>,
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should load the table component', () => {
        expect(wrapper).to.exist;
        expect(wrapper).to.have.length(1);
    });

    it('should load the table component', () => {
        expect(wrapper).to.exist;
        expect(wrapper).to.have.length(1);
    });

    it('should have an FooterDetail', function () {
        const wrapper = shallow(<tableWrapper/>);
        //expect(wrapper.find('mainContentWrap')).to.have.length(1);
        expect(wrapper.contains(".tablewrap")).to.exist;
        
      });

});



