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
                    <p className='footer--text'>Github</p>
                </a>
                <a href="https://www.linkedin.com/in/michael-hodges-124089b4" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className='footer--icon' style={{fontSize: '40px'}} />
                </a>
                <a href="/other/mhodges_cv.pdf" target="_blank" rel="noopener noreferrer">
                    <DescriptionIcon className='footer--icon' style={{fontSize: '35px'}} />
                </a>
                <a href="mailto: michaelcshodges@gmail.com" target="_blank" rel="noopener noreferrer">
                    <EmailIcon className='footer--icon' style={{fontSize: '35px'}} />
                </a>
            </div>
        </div>
    )
}

export default Footer