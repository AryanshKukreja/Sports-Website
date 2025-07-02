import React from "react";
import { Link } from "react-router-dom";
import ContactMe from "./contactform";
import './page.css';

const ContactUs = () => {
    return(
        <div className="block">
        {/* <h2 className="insti">Student Affairs Council(SAC)</h2>
        <p>
            <span className="mail"><img src=".svg" width='30px' alt='img'/>sac email id</span>  
        </p> */}
        {/* <p>
            <span className="tele"><img src='./pictures/phone.svg' width='25px'alt='img' />9048979758</span> 
            <button><Link to="/sports/SAC">Click to know more..</Link></button>
        </p> */}
        <h2 className="insti">Institute Sports Council</h2>
        <p>
            <span className="mail"><img src="./mail.png" width='30px' alt='img'/>gsecsports@iitb.ac.in</span>  
        </p>
        <p>
            <span className="tele"><img src='./phone.png' width='25px'alt='img' />+91 99263 76809</span> 
            </p>
            <p>
            <button class="btn"><Link to="/sports/Council">Click to know more..</Link></button>
        </p>
        <h2 className="insti">Web Team</h2>
        <p>
            <span className="mail"><img src="./mail.png" width='30px' alt='img' />kalpesh.techhead@gmail.com</span>  
        </p>
        <p>
            <span className="tele"><img src='./phone.png' width='25px' alt='img'/>9022513006</span> 
            </p>
            <p>
            <button class="btn"><Link to="/sports/Webteam">Click to know more..</Link></button>
        </p>
        </div>
    );
};

export default ContactUs;