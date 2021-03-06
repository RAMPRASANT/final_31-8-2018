import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/HeaderComponent';
import Footer from './Footer/FooterComponent';

const Layout = ({ children }) => (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
);
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
