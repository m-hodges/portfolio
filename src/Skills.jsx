import React from 'react';

import { 
    PageFlexContainer
} from './styles/styled_components/Containers'

const About = () => {
    return (
        <PageFlexContainer right id='skillsPage'>
            <div className="skills">
                <h2 className="skills--title">
                    Skills
                    <hr />
                </h2>
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras orci diam, aliquet porttitor viverra ac, congue et purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam augue in sodales rhoncus. Proin vitae leo sit amet mi pulvinar varius in ac turpis. Sed pretium eros rhoncus, tristique augue id, dignissim dolor.
                </p>
                <div className="skills--icons">
                    
                </div>
            </div>
        </PageFlexContainer>
    );
};

export default About;