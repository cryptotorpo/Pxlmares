import React from 'react';
import Navbar from '../components/Navbar';
import '../css/font.css';

function Landing () {
    return (
        <div className = 'absolute w-full h-full bg-[#F0F0F0] flex flex-col items-center'>
            <Navbar />
            <div className = 'w-[80%] flex flex-col items-center'>
                <div className = 'absolute top-[300px] w-full max-w-[500px]'>
                    <img src = './img/landing-logo.png' className = 'w-full h-full'></img>
                    <p className = ' text-slate-400 text-center'>
                        <b>Pxlmares</b>, bring horror at your door, Our <b>DESIGNS</b> will leave you wanting more. Our tale will scare and make you jump, Feel their breath as the monsters thump
                    </p>
                </div>
                <div className = 'absolute bottom-0 w-full max-w-[400px]'>
                    <img src = './img/charac-logo.png' className = 'w-full h-full'></img>
                </div>
            </div>
        </div>
    );
}

export default Landing;