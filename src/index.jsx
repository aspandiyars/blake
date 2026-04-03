import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer.jsx';

const footerRoot = document.getElementById('footer-root');
if (footerRoot) {
    ReactDOM.render(<Footer />, footerRoot);
}
