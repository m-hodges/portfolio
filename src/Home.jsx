import React from 'react';

import { PageFlexContainer } from './styles/styled_components/Containers'

const Home = () => {
    return (
        <PageFlexContainer>
            <div className="title">
                <h1 className="title--text">Functional</h1>
                <h1 className="title--text__center"> | </h1>
                <h1 className="title--text">Innovative</h1>
            </div>
            <div className='subtitle'>
                <p className='subtitle--text'>
                    Michael Hodges
                    <hr/>
                </p>
                <p className='subtitle--text'>Fullstack Web Developer</p>
            </div>
            <a href="#aboutPage">
                <img src='/icons/caret-down-solid.svg' alt='To About Page'></img>
            </a>
            {/* bug: makes page load in about page */}
        </PageFlexContainer>
    );
};

export default Home;