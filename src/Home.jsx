import React from 'react';

import { PageFlexContainer } from './styles/styled_components/Containers'

const Home = () => {
    return (
        <PageFlexContainer>
            <h1>Michael Hodges</h1>
            <h2>Fullstack Web Developer</h2>
            <div style={{width: "75%"}}>
            <h3 style={{textAlign: "right"}}>Functionality</h3>
            <h3> | </h3>
            <h3>Creativity</h3>
            </div>
            <a href="#aboutPage">
                <img src='/icons/caret-down-solid.svg' alt='To About Page'></img>
            </a>
            {/* bug: makes page load in about page */}
        </PageFlexContainer>
    );
};

export default Home;