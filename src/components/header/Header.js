import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div className = 'header-container'>
            <h1 className='header-main'>
            L’Association Tunisienne pour l’Intelligence Artificielle
            </h1>
            <div className='header-line'>
                <svg width="330" height="53" viewBox="0 0 330 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M103.54 20.1443C22.6532 22.5171 0.817754 7.15045 0.0708684 3.25185C-0.425946 0.658586 1.79971 -1.1857 3.43841 1.16179C3.75391 1.61374 3.30635 2.51769 4.09871 3.25185C20.1538 11.3133 34.1733 12.4058 102.088 14.1557C158.874 15.619 316.818 -20.8142 329.166 17.8275C339.809 51.3065 245.439 57.1096 228.8 50.7079C225.036 49.2599 220.174 48.3754 220.282 46.5838C220.389 44.7923 221.313 44.7446 223.847 45.5669C262.145 49.2391 319.968 43.0812 322.629 21.0483C325.902 -6.06397 215.835 12.0829 103.54 20.1443Z" fill="#44489A"/>
                </svg>
            </div>
            <span className='header-sub'>
                ATIA, est une association à but non lucratif fondée en 2005 
                par Prof. Khaled GHEDIRA.
            </span>
            <div className='email-button'> 
                <input type='email' placeholder='Enter your email' className='email'/>
                <div className='button'>
                    <div className='button-text'>
                        Join the Community
                    </div>
                    <div className='button-icon'>
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.75 9.625H14.25M14.25 9.625L8.625 4M14.25 9.625L8.625 15.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

