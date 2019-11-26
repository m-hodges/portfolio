import React from 'react';

import { PageFlexContainer } from './styled_components/Containers'

const Home = () => {
    return (
        <PageFlexContainer style={{backgroundImage: "url(https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)"}}>
            <h1>Michael Hodges</h1>
            <div style={{width: "75%"}}>
            <h3 style={{float: 'left'}}>Functionality</h3>
            <h3>x</h3>
            <h3 style={{float: "right"}}>Creativity</h3>
            </div>
            <h2>Fullstack Web Developer</h2>
            <a href="#aboutPage">
                <img src='/icons/caret-down-solid.svg' alt='To About Page'></img>
            </a>
            {/* bug: makes page load in about page */}
        </PageFlexContainer>
    );
};

export default Home;