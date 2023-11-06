import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

function Footer() {
    return (
        <div className='w-[100%] bg-white flex flex-row justify-between gap-5 border-t-gray-300 border-t py-8'>
            <div className = 'flex justify-center items-center w-1/3'>
                <img src = "./img/small-logo.png" className = 'w-[100px]'></img>
            </div>
            <div className = 'flex flex-col gap-3 justify-center items-center w-1/3 text-xs'>
                <p>Get these apps for your community . Get Started</p>
                <p className = "text-slate-400">© 2023 twc. All rights reserved.</p>
            </div>
            <div className = 'flex flex-row gap-3 justify-center items-center w-1/3 text-xl text-gray-800'>
                <i className="fab fa-discord"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
            </div>
        </div>
    );
}

export default Footer;