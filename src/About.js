import React from 'react';

import PageContainer from './styled_components/PageContainer'

const About = () => {
    return (
        <PageContainer grid>
            <div>
                <h1>About Me</h1>
                <p>lorem</p>
            </div>
            <div>
                <h2>Contact</h2>
            </div>
            <div>
                <h2>CV</h2>
            </div>
            <div style={{gridColumnStart: 2}}>
                <h2>Skills</h2>
            </div>
        </PageContainer>
    );
};

export default About;