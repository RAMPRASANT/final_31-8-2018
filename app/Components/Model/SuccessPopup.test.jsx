import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ModalPopup from './SuccessPopup';

describe('<ModalPopup />', () => {
    let ModalPopupWrapper;

    beforeEach(() => {
        ModalPopupWrapper = shallow(<ModalPopup />);
    });

    it('Should render the component', () => {
        expect(ModalPopupWrapper).to.exist;
    });
});
