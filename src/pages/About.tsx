import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Partner from '../components/Partner';
import Team from '../components/Team';
import WorkWithUs from '../components/WorkWithUs';
import Summary from '../components/Summary';

function About() {
    return (
        <div className='w-full h-full bg-transparent flex flex-col items-center gap-6'>
            <Navbar />
            <div className="fixed bottom left-0 justify-center items-center y00ts:block" style={{width: "100%", height: "100vh", zIndex: -10, opacity: 1}}>
                <video preload="metadata" loop={true} autoPlay={true} muted={true} playsInline={true} style={{objectFit:"cover", minHeight:"100%", minWidth:"100%"}}>
                    <source src="./movies/migration-idle.mp4" type="video/mp4" />
                </video>
            </div>  
            <div className='m-container h-full flex flex-col items-center gap-6'>
                {/* <div className = 'w-[80%] flex flex-col items-center'>
                <div className = 'absolute top-[300px] w-full max-w-[500px]'>
                    <img src = './img/landing-logo.png' className = 'w-full h-full'></img>
                    <p className = ' text-slate-400 text-center'>Let <b>The Wild Child</b> be the wild card in your marketing strategy and stand out from the crowd. Don't be afraid to let your imagination run wild with <b>T.W.C</b>!</p>
                </div>
            </div>
            <div className = 'absolute right-0 bottom-10'>
                <img src = './img/back.png'></img>
            </div> */}
                {/* <Testimonials /> */}
                
                <Summary />
                <Team />
                <Partner />
                <WorkWithUs />
            </div>
            <Footer />
        </div>
    );
}

export default About;