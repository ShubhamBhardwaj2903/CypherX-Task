import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="wrapper max-width">
            <footer className="footer width">
                <div className="footer-section">
                    <img src="assets/footer_logo.png" alt="CloudErp Logo" className="footer-logo" />
                    <div className="footer-link">Get Support</div>
                    <div className="footer-link">Become a Partner</div>
                </div>
                <div className="footer-section">
                    <div className="footer-title">Products</div>
                    <div className="footer-link">Finance</div>
                    <div className="footer-link">Sales</div>
                    <div className="footer-link">Websites</div>
                    <div className="footer-link">Inventory & MRP</div>
                    <div className="footer-link">HR</div>
                    <div className="footer-link">Marketing</div>
                </div>
                <div className="footer-section">
                    <div className="footer-title">Get Started</div>
                    <div className="footer-link">What is CloudERP?</div>
                    <div className="footer-link">Solutions</div>
                    <div className="footer-link">Customer Stories</div>
                    <div className="footer-link">FAQs</div>
                    <div className="footer-link">Offers</div>
                    <div className="footer-link">Pricing</div>
                </div>
                <div className="footer-section">
                    <div className="footer-title">About</div>
                    <div className="footer-link">Help and Support</div>
                    <div className="footer-link">Terms & Conditions</div>
                    <div className="footer-link">Privacy Policy</div>
                    <div className="footer-link">Login</div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
