import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import sendEmail, { validate } from './SendEmail';

configure({ adapter: new Adapter() });
// Checking whether the component contains static information
describe('Test suits for Send Email', () => {
    it('should render the component elements properly', () => {
        const component = shallow(<sendEmail />);
        expect(component.contains('loginBoxWrap')).to.exist;
    });
    // Ensuring the type of the email is of "text"
    // it('email should of text type', () => {
    //     const component = renderWithStore(SendEmailWrapper);
    //     expect(component.find('input[type="email"][name="email"]')).to.exist;
    // });
    // Ensuring whether Send Reset Link button is available
    it('should render the component items properly', () => {
        const component = shallow(<sendEmail />);
        expect(component.contains('Send Reset Link')).to.exist;
    });
    it('should render the component items properly', () => {
        const component = shallow(<sendEmail />);
        expect(component.contains('form-group')).to.exist;
    });
    it('should render the component items properly', () => {
        const component = shallow(<sendEmail />);
        expect(component.contains('loginBoxWrap')).to.exist;
    });
    it('inValid Email', () => {
        const aptError = validate({ password: '' });
        expect(aptError.password).to.equal('Required');
    });
    it('inValid Email', () => {
        const aptError = validate({ email: 'Overstock@' });
        expect(aptError.password).to.equal('Please Enter a Valid Email');
    });
    it('should render the component items properly', () => {
        const component = shallow(<sendEmail handleSubmit={() => {}} />);
        expect(component.contains('Enter your email address and we will send you a link.')).toBe(true);
    });
    //    // Ensuring the type of the email is of "text"
    //    it("email should of text type", () => {
    //     const component = renderWithStore(ForgotWrapper);
    //     expect(component.find('input[type="text"][name="email"]').length).toBe(1);
//   });
});
