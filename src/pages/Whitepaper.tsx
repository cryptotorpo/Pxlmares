import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Whitepaper () {
    return (
        <div className = 'absolute w-full h-full bg-[#F0F0F0] flex flex-col items-center'>
            <Navbar />
            <div className = 'w-[80%] flex flex-col items-center'>
                <div className = 'absolute top-[300px] w-full max-w-[500px]'>
                    <img src = './img/landing-logo.png' className = 'w-full h-full'></img>
                    <p className = ' text-slate-400 text-center'>Let <b>The Wild Child</b> be the wild card in your marketing strategy and stand out from the crowd. Don't be afraid to let your imagination run wild with <b>T.W.C</b>!</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Whitepaper;