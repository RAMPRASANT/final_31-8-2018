import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SignupPage from './SignupPage';


describe('<SignupPage/>', () => {
    it('should render the component items properly', () => {
        const component = shallow(<SignupPage />);
        expect(component.contains(' Discover the one-stop shop that works for you. ')).to.exist;
    });
    it('should render the component items properly', () => {
        const wrapper = shallow(<SignupPage />);
        expect(wrapper.find('.bgStyle')).to.have.lengthOf(1);
    });
});
