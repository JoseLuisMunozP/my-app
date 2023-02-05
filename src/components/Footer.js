import React from 'react';
import Twitterlogo from "../images/Twitterlogo.png"
import Facebooklogo from "../images/Facebooklogo.png"
import Instagramlogo from "../images/Instagramlogo.png"
import Githublogo from "../images/Githublogo.png"


function Footer(){

    return(
        <div className='footer'>
            <img src={Twitterlogo} />
            <img src={Facebooklogo} />
            <img src={Instagramlogo} />
            <img src={Githublogo} />

        </div>
    )

}

export default Footer;