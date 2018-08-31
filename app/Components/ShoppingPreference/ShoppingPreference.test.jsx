import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

import ShoppingPreference from './ShoppingPreference';

describe('<ShoppingPreference />', () => {
    let wrapper;
    const willUnmount = sinon.spy();
    const didMount = sinon.spy();

    beforeEach(() => {
        wrapper = shallow(<ShoppingPreference />);
    });

    it('Should render ShoppingPreference component', () => {
        expect(wrapper).to.be.exist;
        console.log(wrapper.ref, 'chechechechechechech');
    });

    // it(' triggers addEventListener', () => {
    //     const instance1 = wrapper.instance();
    //     instance1.node = {
    //         contains: () => true,
    //     };
    //     const e = {
    //         target: {
    //         },
    //     };
    //     wrapper.instance().handleClick(e);
    // });

    // it('triggers removeEventListener', () => {
    //     const instance1 = wrapper.instance();
    //     instance1.node = {
    //         contains: () => false,
    //   };   
    //     const e = {
    //         target: {
    //         },
    //     };
    //     wrapper.instance().handleClick(e);
    // });

    it.skip('Component unmount should be called', () => {
        // Component is extended to mock the lifecycle methods
        // eslint-disable-next-line
        class ShoppingPreference extends Component {
            constructor(props) {
                super(props);
                this.componentWillUnmount = willUnmount;
                this.componentDidMount = didMount;
            }

            render() {
                return (
                    <div />
                );
            }
        }

        const shoppingWrapper = mount(<ShoppingPreference />);
        expect(didMount).to.have.property('callCount', 1);
        expect(willUnmount).to.have.property('callCount', 0);
        shoppingWrapper.unmount();
        expect(willUnmount).to.have.property('callCount', 1);
        const instance1 = wrapper.instance();
        instance1.node = {
            contains: () => false,
        };
        const e = {
            target: {
                test: () => {},
            },
        };
        wrapper.instance().handleClick(e);
    });

    it('Category method to have been called for suggested searches', () => {
        const instance = wrapper.instance();
        instance.setState({ isSearchFocused: true });
        wrapper.find('.categories').at(0).simulate('click');
    });

    it('Category method to have been called for popular category', () => {
        const instance = wrapper.instance();
        instance.setState({ isSearchFocused: false });
        wrapper.find('.categories').at(1).simulate('click');
    });

    it.skip('Resetting to default category on clicking close icon on search', () => {
        const instance = wrapper.instance();
        instance.setState({ isCloseIconVisible: true });
        wrapper.find('.closeIconOvrride').at(0).simulate('click');
    });
});
