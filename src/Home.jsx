import React from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { PageFlexContainer } from './styles/styled_components/Containers'

const Home = () => {
    const state = {
        isDisplayed: false
    }

    return (
        <PageFlexContainer>
            <div className='spacer'></div>
            <div className="title">
                <h1 className="title--text">Functional</h1>
                <h1 className="title--text__center"> | </h1>
                <h1 className="title--text">Innovative</h1>
            </div>
            <div className='subtitle'>
                <p className='subtitle--text subtitle--text__main'>
                    Michael Hodges
                    <hr className='subtitle--separator' />
                </p>
                <p className='subtitle--text subtitle--text__sub'>Fullstack Web Developer</p>
            </div>
            <div className='spacer spacer--container'>
                <a href="#aboutPage" className='continue'>
                    <ExpandMoreIcon fontSize='large'/>
                </a>
                {/* {this.state.isDisplayed && <p className='scroll'>Scroll</p>} */}
            </div>
            {/* bug: makes page load in about page - componentdidmount reset page position? */}
        </PageFlexContainer>
    );
};

export default Home;