import React from "react";
import "./council.css"
import councilLogo from "./pictures/Logos_for_Photos/IITB Sports Logo BW (2).png";
import adventure from './pictures/Logos_for_Photos/adventure.jpg';
import athletics from './pictures/Logos_for_Photos/Athletics.png';
import aquatics from './pictures/Logos_for_Photos/Aquatics logo.png';
import badminton from './pictures/Logos_for_Photos/badminton.png';
import basketball from './pictures/Logos_for_Photos/basketball.png';
import cricket from './pictures/Logos_for_Photos/cricket.png';
import chess from './pictures/Logos_for_Photos/chess.png';
import football from './pictures/Logos_for_Photos/football.png';
import hockey from './pictures/Logos_for_Photos/hockey.png';
import indianGames from './pictures/Logos_for_Photos/indiangames.png';
import squash from './pictures/Logos_for_Photos/squash.png';
import tabletennis from './pictures/Logos_for_Photos/tabletennis.png';
import tennis from './pictures/Logos_for_Photos/tennis.png';
import volleyball from './pictures/Logos_for_Photos/volleyball.png';
import weightlifting from './pictures/Logos_for_Photos/weightlifting.png';
import fitness from './pictures/Logos_for_Photos/fitness.png';
import frisbee from './pictures/Logos_for_Photos/frisbee.png';
import mail from './mail.svg';
import instagram from './instagram.png';

const Council = () => {
    return (
        <>
            <div className="all_content">
                <h1 className="title">Institute Sports Council</h1>
                <h1 className="title">2024-2025</h1>
                <div className="leader">
                    <h2>General Secretary Sports Affairs</h2>
                    <img className="gen" alt="" src={councilLogo} />
                    <p className="name">Rajwardhan Toraskar<br />
                    <div className="social_links">
                        <a href="https://www.instagram.com/iitbombaysports/"><img className="seclogos"alt="" src={instagram} /></a>
                        <a href="mailto:gsecsports@iitb.ac.in"><img className="sec_mail_logos" alt=""src={mail} /></a>
                    </div>
                </p>
                </div>
                <div className="container">
                    {/* Nominees FIRST */}
                    <div className="info-block">
                        <h2 style={{fontSize: "1.3rem"}} className="enc">Institute Sports Nominee-Events & Clubs</h2>
                        <img className="circular" src={councilLogo} alt="" />
                        <p className="name">
                            Atharva Naik<br />
                            <a href="https://www.instagram.com/iitbombaysports/"><img className="logos" src={instagram} alt="Instagram" /></a>
                            <a href="mailto:gsecsports@iitb.ac.in"><img className="mail_logos" src={mail} alt="Mail" /></a>
                        </p>
                    </div>
                    <div className="info-block">
                        <h2>Institute Sports Girls Nominee</h2>
                        <img className="circular" src={councilLogo} alt="" />
                        <p className="name">
                            Akshara Naik<br />
                            <a href="https://www.instagram.com/iitbombaysports/"><img className="logos" src={instagram} alt="Instagram" /></a>
                            <a href="mailto:gsecsports@iitb.ac.in"><img className="mail_logos" src={mail} alt="Mail" /></a>
                        </p>
                    </div>
                    <div className="info-block">
                        <h2>Institute Sports Admin Nominee</h2>
                        <img className="circular" src={councilLogo} alt="" />
                        <p className="name">
                            Raghav Agrawal<br />
                            <a href="https://www.instagram.com/iitbombaysports/"><img className="logos" src={instagram} alt="Instagram" /></a>
                            <a href="mailto:gsecsports@iitb.ac.in"><img className="mail_logos" src={mail} alt="Mail" /></a>
                        </p>
                    </div>
                    </div>
                    {/* Heads BELOW */}
                    <h1 className="con-heads"><b>Heads</b></h1>
                    <div className="container">
                    <div className="info-block">
                        <h2>Institute Sports Technical Head</h2>
                        <img className="circular" src={councilLogo} alt="" />
                        <p className="name">
                            Aryansh Kukreja<br />
                            <a href="https://www.instagram.com/iitbombaysports/"><img className="logos" src={instagram} alt="Instagram" /></a>
                            <a href="mailto:gsecsports@iitb.ac.in"><img className="mail_logos" src={mail} alt="Mail" /></a>
                        </p>
                    </div>
                    <div className="info-block">
                        <h2>Institute Sports Creatives Head</h2>
                        <img className="circular" src={councilLogo} alt="" />
                        <p className="name">
                            Akanksha Patel<br />
                            <a href="https://www.instagram.com/iitbombaysports/"><img className="logos" src={instagram} alt="Instagram" /></a>
                            <a href="mailto:gsecsports@iitb.ac.in"><img className="mail_logos" src={mail} alt="Mail" /></a>
                        </p>
                    </div>
                    <div className="info-block">
                        <h2>Institute Sports Media Head</h2>
                        <img className="circular" src={councilLogo} alt="" />
                        <p className="name">
                            Yaman Singh<br />
                            <a href="https://www.instagram.com/iitbombaysports/"><img className="logos" src={instagram} alt="Instagram" /></a>
                            <a href="mailto:gsecsports@iitb.ac.in"><img className="mail_logos" src={mail} alt="Mail" /></a>
                        </p>
                    </div>
                </div>
                <h1 className="con-secys"><b>Secretaries</b></h1>
                <div className="container secy">
            <div className="info-block">
                <div className="sport-number">1</div>
                <h2>Institute Athletics Secretary</h2>
                <img className="circular" src={athletics} alt="" />
                <p className="name">
                    Praveen Kumar<br />
                    <a href="https://www.instagram.com/iitbombayathletics/"><img className="logos" src={instagram} alt="Instagram" /></a>
                    <a href="mailto:athletics@iitb.ac.in"><img className="mail_logos" src={mail} alt="Mail" /></a>
                </p>
            </div>
            <div className="info-block">
                <div className="sport-number">2</div>
                <h2>Institute Aquatics Secretary</h2>
                <img className="circular" src={aquatics} alt="" />
                <p className="name">
                    Meet<br />
                    <a href="https://www.instagram.com/aquatics_iitb/"><img className="logos" src={instagram} alt="Instagram" /></a>
                    <a href="mailto:aquatics@iitb.ac.in"><img className="mail_logos" src={mail} alt="Mail" /></a>
                </p>
            </div>
            
            <div className="info-block">
                <div className="sport-number">3</div>
                <h2>Institute Badminton Secretary</h2>
                <img className="circular" src={badminton} alt="" />
                <p className="name">
                    J Sai Charan<br />
                    <a href="https://www.instagram.com/badmintonclub_iitbombay/"><img className="logos" src={instagram} alt="Instagram" /></a>
                    <a href="mailto:badminton@iitb.ac.in"><img className="mail_logos" src={mail} alt="Mail" /></a>
                </p>
            </div>
            <div className="info-block">
                <div className="sport-number">4</div>
                <h2>Institute Basketball Secretary</h2>
                <img className="circular" src={basketball} alt="" />
                <p className="name">
                    Deepraj<br />
                    <a href="https://www.instagram.com/basketball_iitb/"><img className="logos" src={instagram} alt="Instagram" /></a>
                    <a href="mailto:basketball@iitb.ac.in"><img className="mail_logos" src={mail} alt="Mail" /></a>
                </p>
            </div>
            
            <div className="info-block">
                <div className="sport-number">5</div>
                <h2>Institute Board Games Secretary</h2>
                <img className="circular" src={chess} alt="" />
                <p className="name">
                    Akshat Karkar<br />
                    <a href="/#"><img className="logos" src={instagram} alt="Instagram" /></a>
                    <a href="mailto:boardgames@iitb.ac.in"><img className="mail_logos" src={mail} alt="Mail" /></a>
                </p>
            </div>
            
            <div className="info-block">
                <div className="sport-number">6</div>
                <h2>Institute Cricket Secretary</h2>
                <img className="circular" src={cricket} alt="" />
                <p className="name">
                    Pradyumna Gugulothu<br />
                    <a href="https://www.instagram.com/cricket_club_iitb/"><img className="logos" src={instagram} alt="Instagram" /></a>
                    <a href="mailto:cricket@iitb.ac.in"><img className="mail_logos" src={mail} alt="Mail" /></a>
                </p>
            </div>
            
            <div className="info-block">
                <div className="sport-number">7</div>
                <h2>Institute Football Secretary</h2>
                <img className="circular" src={football} alt="" />
                <p className="name">
                    Yash Shah<br />
                    <a href="https://www.instagram.com/iitb_football/"><img className="logos" src={instagram} alt="Instagram" /></a>
                    <a href="mailto:football@iitb.ac.in"><img className="mail_logos" src={mail} alt="Mail" /></a>
                </p>
            </div>
            
            <div className="info-block">
                <div className="sport-number">8</div>
                <h2>Institute Hockey Secretary</h2>
                <img className="circular" src={hockey} alt="" />
                <p className="name">
                    Khushal<br />
                    <a href="https://www.instagram.com/iitbombay_hockey/"><img className="logos" src={instagram} alt="Instagram" /></a>
                    <a href="mailto:hockey@iitb.ac.in"><img className="mail_logos" src={mail} alt="Mail" /></a>
                </p>
            </div>
            
            <div className="info-block">
                <div className="sport-number">9</div>
                <h2>Institute Indian Games Secretary</h2>
                <img className="circular" src={indianGames} alt="" />
                <p className="name">
                    Kanak Tembhare<br />
                    <a href="https://www.instagram.com/indiangames_iitb/"><img className="logos" src={instagram} alt="Instagram" /></a>
                    <a href="mailto:indiangames@iitb.ac.in"><img className="mail_logos" src={mail} alt="Mail" /></a>
                </p>
            </div>
            
            <div className="info-block">
                <div className="sport-number">10</div>
                <h2>Institute Lawn Tennis Secretary</h2>
                <img className="circular" src={tennis} alt="" />
                <p className="name">
                    Nehal Gupta<br />
                    <a href="/#"><img className="logos" src={instagram} alt="Instagram" /></a>
                    <a href="mailto:lawntennis@iitb.ac.in"><img className="mail_logos" src={mail} alt="Mail" /></a>
                </p>
            </div>
            
            <div className="info-block">
                <div className="sport-number">11</div>
                <h2>Institute Squash Secretary</h2>
                <img className="circular" src={squash} alt="" />
                <p className="name">
                    Manthan Goyal<br />
                    <a href="https://www.instagram.com/tennis_club_iitb/"><img className="logos" src={instagram} alt="Instagram" /></a>
                    <a href="mailto:squash@iitb.ac.in"><img className="mail_logos" src={mail} alt="Mail" /></a>
                </p>
            </div>
            
            <div className="info-block">
                <div className="sport-number">12</div>
                <h2>Institute Table Tennis Secretary</h2>
                <img className="circular" src={tabletennis} alt="" />
                <p className="name">
                    Sameer Chopra<br />
                    <a href="https://www.instagram.com/table.tennis_iitb/"><img className="logos" src={instagram} alt="Instagram" /></a>
                    <a href="mailto:tabletennis@iitb.ac.in"><img className="mail_logos" src={mail} alt="Mail" /></a>
                </p>
            </div>
            
            <div className="info-block">
                <div className="sport-number">13</div>
                <h2>Institute Volleyball Secretary</h2>
                <img className="circular" src={volleyball} alt="" />
                <p className="name">
                    Ghanshyam Choudhary<br />
                    <a href="https://www.instagram.com/volleyballclub_iitbombay/"><img className="logos" src={instagram} alt="Instagram" /></a>
                    <a href="mailto:volleyball@iitb.ac.in"><img className="mail_logos" src={mail} alt="Mail" /></a>
                </p>
            </div>
            
            <div className="info-block">
                <div className="sport-number">14</div>
                <h2>Institute Weightlifting Secretary</h2>
                <img className="circular" src={weightlifting} alt="" />
                <p className="name">
                    Prateek Behera<br />
                    <a href="https://www.instagram.com/iitb_weightlifting/"><img className="logos" src={instagram} alt="Instagram" /></a>
                    <a href="mailto:weightlifting@iitb.ac.in"><img className="mail_logos" src={mail} alt="Mail" /></a>
                </p>
            </div>
                </div>
                {/* Managers Section */}
                <h1 className="con-managers"><b>Managers</b></h1>
                <div className="container">
                    <div className="info-block">
                        <h2>Adventure Club Manager</h2>
                        <img className="circular" src={adventure} alt="" />
                        <p className="name">
                            Mohit Yadav<br />
                            <a href="https://www.instagram.com/adventureclub_iitb/"><img className="logos" src={instagram} alt="Instagram" /></a>
                            <a href="/#"><img className="mail_logos" src={mail} alt="Mail" /></a>
                        </p>
                    </div>
                    <div className="info-block">
                        <h2>DKCC Manager</h2>
                        <img className="circular" src={chess} alt="" />
                        <p className="name">
                            Shreyas Jogdande<br />
                            <a href="https://www.instagram.com/dkcc_iitb/"><img className="logos" src={instagram} alt="Instagram" /></a>
                            <a href="/#"><img className="mail_logos" src={mail} alt="Mail" /></a>
                        </p>
                    </div>
                    <div className="info-block">
                        <h2>Fitness Club Manager</h2>
                        <img className="circular" src={fitness} alt="" />
                        <p className="name">
                            Piyush Tailor<br />
                            <a href="https://www.instagram.com/fitness_club_iitb/"><img className="logos" src={instagram} alt="Instagram" /></a>
                            <a href="/#"><img className="mail_logos" src={mail} alt="Mail" /></a>
                        </p>
                    </div>
                    <div className="info-block">
                        <h2>Frisbee Manager</h2>
                        <img className="circular" src={frisbee} alt="" />
                        <p className="name">
                            Shaashvat Shekhar<br />
                            <a href="https://www.instagram.com/iitb_ultimate_frisbee/">
                            <img className="logos" src={instagram} alt="Instagram" /></a>
                            <a href="/#"><img className="mail_logos" src={mail} alt="Mail" /></a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Council;