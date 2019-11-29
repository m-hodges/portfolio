import React from 'react';

import { PageFlexContainer } from './styles/styled_components/Containers'

const Home = () => {
    return (
        <PageFlexContainer>
            <div>
                <h1>Functional</h1>
                <h1> | </h1>
                <h1>Innovative</h1>
            </div>
            <p>Michael Hodges</p>
            <p>Fullstack Web Developer</p>
            <a href="#aboutPage">
                <img src='/icons/caret-down-solid.svg' alt='To About Page'></img>
            </a>
            {/* bug: makes page load in about page */}
        </PageFlexContainer>
    );
};

export default Home;