import React from 'react';
import { mount, shallow } from 'enzyme';
import { Route } from 'react-router';
import { expect, value } from 'chai';
import PrivateRoute from './PrivateRouter';
import SignupPage from '../Signup/SignupPage';

describe('PrivateRouter', () => {
    const wrapper = shallow(<PrivateRoute />);

    // expect(pathMap['/signup']).toBe(true);

    it('should find the PrivateRouter ', () => {
        const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
            const routeProps = route.props();
            pathMap[routeProps.path] = routeProps.component;
            return pathMap;
        }, {});

        console.log(pathMap);
    });
});
