import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='w-[90%] flex flex-row justify-center gap-5 border-b-black border-b'>
            <div className='font-primary px-4 pt-8 pb-5 text-sm text-gray-700 cursor-pointer'>
                <Link to="/explorer">Explorer</Link>
            </div>
            <div className='font-primary px-4 pt-8 pb-5 text-sm text-gray-700 cursor-pointer'>
                <Link to="/whitepaper">Whitepaper</Link>
            </div>
            <div className='font-primary px-4 pt-8 pb-5 text-sm text-gray-700 cursor-pointer'>

                <Link to="/about">About Us</Link>
            </div>
        </div>
    );
}

export default Navbar;