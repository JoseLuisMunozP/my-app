import React from 'react';
import emailLogo from "../images/Iconemail.png"
import linkedinLogo from "../images/Vectorlinkedin.png"

function EmailLinkedin(){

    return(

        <div className='emailLinkedin'>
            
            <button className='btn-email'>
                <img src={emailLogo} />
                Email
            </button>


            <button className='btn-linkedin'>
                <img src={linkedinLogo} />
                LinkedIn
            </button>

        </div>
    )

}

export default EmailLinkedin;
