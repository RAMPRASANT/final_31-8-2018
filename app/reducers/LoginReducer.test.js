import { expect } from 'chai';
import LoginReducer from './LoginReducer';
// import * as actions from '../actionTypes/LoginActionTypes';

describe('SearchFilterReducer', () => {
    // const loginData = {
    //     emailId: 'professional@overstock.com',
    //     password: 'Overstock18',
    // };

    // it('Should be called LOGIN_VALUES', () => {
    //     expect(
    //         LoginReducer({ data: loginData }, {
    //             type: 'LOGIN_VALUES',
    //         }),
    //     ).to.deep.equal({ data: loginData });
    // });
    it('initialstate', () => {
        expect(
            LoginReducer(undefined, {}),
        ).to.deep.equal({});
    });
});
