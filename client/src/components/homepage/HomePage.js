import React from 'react';
// import gymk from './assets/gymkhana.jpg';
import abim from "./assets/logodark.png";
// import './page.css';
// import court from './assets/court.jpg'
// import appvid from './assets/appvid.mp4'
// import bcat from '../assets/blackcats.png';
import blackcat from './assets/bcatlogo.png'
// import { BsApp } from 'react-icons/bs';
import './HomePage.css';

export const HomePage = () => {
    return (
        <div className='content-page'>
            {/* Blurred Background with Text */}
            <div className="bg-container">
                <div className="bg-image"></div>
                <div className="bg-text">
                    <h3 className="wl1">Welcome to</h3>
                    <h1 className="wl2">IIT Bombay Sports</h1>
                </div>
            </div>

            <div className='about'>
                <img src={abim} className='aboutimg' alt='abim'/>
                <div>
                    <div className='aboutus'>
                        <h4>About Us</h4>
                    </div>
                    <div className='aboutText'>
                        <br />
                        <p>IIT Bombay boasts a vibrant sports scene that keeps students active throughout the year. The institute's calendar is packed with exciting events, ranging from the inter-hostel General Championships to the prestigious Inter-IIT competitions. 
                           To nurture this competitive spirit and provide students with the opportunity to pursue their athletic passions, IIT Bombay offers state-of-the-art sports facilities. From basketball and volleyball courts to a swimming pool, football ground, and cricket ground, the
                           institute caters to a wide range of sporting interests. This commitment extends beyond facilities, with students and faculty alike demonstrating a dedication to honing their skills and fostering strong bonds through sportsmanship.</p>
                        <h4 className='slogan'>Until.&nbsp;&nbsp;&nbsp;&nbsp;Victory.&nbsp;&nbsp;&nbsp;&nbsp; Always.</h4>
                    </div>
                </div>
            </div>


            <div className='blackCats'>
                <div>
                    <div className='aboutus' id="blacat">
                        <h4>Bombay BlackCats</h4>
                    </div>
                    <div className='aboutText' >
                        <br />
                        The BlackCats, IIT Bombay's Inter-IIT contingent, is a testament to the institute's unwavering dedication to athletic excellence.
                        Since 1961, the Inter-IIT Sports Meet has served as India's premier inter-collegiate sporting battleground, drawing over 3500 athletes from all IITs. 
                        The BlackCats are a force driven by an unparalleled passion for their sports.  It burns brightly in the countless hours spent honing their skills, and the unwavering commitment to supporting their teammates. 
                        The BlackCats are a living embodiment of IIT Bombay's vibrant sports culture, where dedication, expert coaching, passion, and teamwork become the cornerstones of athletic achievement.
                    </div>
                </div>
                <img src={blackcat} className='aboutimg' id="catimg" alt='blackcats'/>
            </div>


            <div className='sportApp'>
                {/* <video className="vid" src={appvid} autoPlay muted loop /> */}
                <div>
                    <div className='aboutus' id="sportsapp">
                        <h4>Sports App </h4>
                    </div>
                    <div className='apptext'>
                        <br />
                        {/* Stay connected with IIT Bombay sports! Download our Sports App, now available for both Android and iOS. 
                        Click here for more details and to download.
                        Join now to unlock a world of sports news, exclusive content, and a thriving community.  */}
                        (Andriod + iOS)<br></br><br></br>
                        Launching Soon... 
                    </div>
                </div>
            </div>
    </div>

    );
};

export default HomePage;