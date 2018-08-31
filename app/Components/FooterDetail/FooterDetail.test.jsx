import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import FooterDetail from './FooterDetail';


describe('<FooterDetail/>', () => {
    it('should render the component items properly', () => {
        const component = shallow(<FooterDetail />);
        expect(component.contains('Save Time & Money')).to.exist;
    });
    it('should render the component items properly', () => {
        const wrapper = shallow(<FooterDetail />);
        expect(wrapper.find('.mainContentWrap')).to.have.lengthOf(1);
    });
});
