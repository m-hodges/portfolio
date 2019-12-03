import React from 'react'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer--container'>
                <a className='footer--icon' href="https://github.com/m-hodges" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon style={{fontSize: '31px'}}/>
                    <div className='footer--text__container'>
                        <p className='footer--text'>Github</p>
                    </div>
                </a>
                <a className='footer--icon' href="https://www.linkedin.com/in/michael-hodges-124089b4" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon style={{fontSize: '40px'}} />
                    <div className='footer--text__container'>
                        <p className='footer--text'>LinkedIn</p>
                    </div>
                </a>
                <a className='footer--icon' href="/other/mhodges_cv.pdf" target="_blank" rel="noopener noreferrer">
                    <DescriptionIcon style={{fontSize: '35px'}} />
                    <div className='footer--text__container'>
                        <p className='footer--text'>CV</p>
                    </div>
                </a>
                <a className='footer--icon' href="mailto: michaelcshodges@gmail.com" target="_blank" rel="noopener noreferrer">
                    <EmailIcon  style={{fontSize: '35px'}} />
                    <div className='footer--text__container'>
                        <p className='footer--text'>Contact</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Footer