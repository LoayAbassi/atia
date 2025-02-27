import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div class="footer-container">
                <img src="./images/logo.png" alt="Logo" />
                <table class="footer-table">
                    <tr className='special'>
                        <td>L’ATIA</td>
                        <td>Autre Liens</td>
                        <td>Legal</td>
                    </tr>
                    <tr className='other'>
                        <td>L’ATIA</td>
                        <td>Evénement</td>
                        <td>Terms of Service</td>
                    </tr>
                    <tr className='other'>
                        <td>Partenaire</td>
                        <td>Adhésion</td>
                        <td>Privacy Policy</td>
                    </tr>
                    <tr className='other'>
                        <td>Bureau Executif</td>
                        <td>Contact</td>
                    </tr>
                </table>
                
            </div>
            <hr className="footer-line" />
            <p class="footer-bottom">© 2025 L’ATIA. All rights reserved.</p>
        </footer>
    )
};
export default Footer;
