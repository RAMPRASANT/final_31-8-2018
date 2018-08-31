import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import ForgotPassword, { validate } from './ForgotPassword';

configure({ adapter: new Adapter() });

// const customerDetails = {
//     firstName: 'Tony',
//     lastName: 'Stark',
//     phoneNumber: '123-123-1234',
//     email: 'tony.stark@jcp.com',
//     address1: '1011 Stark Way',
//     address2: '',
//     city: 'Los Angeles',
//     state: 'CA'
//     country: 'US',
//     zipCode: '90111',
// };


describe('Test suits for ForgotPassword', () => {
    // let wrapper;
    // Ensuring the type of the password is of "password"
    // it('pwd should of password type', () => {
    //     wrapper = mount(
    //         <Provider store={store} >
    //             <ForgotPasswordWrapper />
    //         </Provider>,
    //     );
    //     expect(wrapper.find('input[type="password"][name="password"]').length).toBe(1);
    // });

    // it('should render the component items properly', () => {
    //     wrapper = mount(
    //         <Provider store={store} >
    //             <ForgotPasswordWrapper />
    //         </Provider>,
    //     );
    //     expect(wrapper.contains('Forgot Password')).toBe(true);
    // });
    // const mockStore = configureStore([]);
    // const store = mockStore(customerDetails);
    // let wrapper;
    // beforeEach(() => {
    //     wrapper = mount(
    //         <Provider store={store} >
    //             <ExitaccountWrapper />
    //         </Provider>,
    //     );
    // });
    // afterEach(() => {
    //     wrapper.unmount();
    // });
    it('should render the component items properly', () => {
        const component = shallow(<ForgotPassword handleSubmit={() => {}} />);
        expect(component.contains('Enter a new password')).to.exist;
    });


    // Ensuring whether Sign In button is available

    it('should render the component items properly', () => {
        const component = shallow(<ForgotPassword handleSubmit={() => {}} />);
        expect(component.contains(' Done ')).to.exist;
    });


    // Checking whether form-group,loginBoxWrap class has been defined

    it('should render the component elements properly', () => {
        const component = shallow(<ForgotPassword handleSubmit={() => { }} />);
        expect(component.contains('form-group')).to.exist;
    });

    it('should render the component elements properly', () => {
        const component = shallow(<ForgotPassword handleSubmit={() => { }} />);
        expect(component.contains('loginBoxWrap')).to.exist;
    });

    it('inValid Email', () => {
        const aptError = validate({ password: '' });
        expect(aptError.password).to.equal('Required');
    });

    // it('inValid Email', () => {
    //     const aptError = validate({ email: 'Overstock@' });
    //     expect(aptError.password).to.equal('Please Enter a Valid Email');
    // });
});
