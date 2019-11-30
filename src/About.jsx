import React from 'react';

import { 
    PageFlexContainer
} from './styles/styled_components/Containers'

const About = () => {
    return (
        <PageFlexContainer left id='aboutPage'>
            <div className="about">
                <h2 className="about--title">
                    About
                    <hr />
                </h2>
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras orci diam, aliquet porttitor viverra ac, congue et purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam augue in sodales rhoncus. Proin vitae leo sit amet mi pulvinar varius in ac turpis. Sed pretium eros rhoncus, tristique augue id, dignissim dolor.
                </p>
            </div>
        </PageFlexContainer>
    );
};

export default About;