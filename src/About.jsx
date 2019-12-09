import React from 'react';

import { 
    PageFlexContainer
} from './styles/styled_components/Containers'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

const About = () => {
    const titleRef = React.createRef()
    const executeScroll = () => scrollToRef(titleRef)


    return (
        <PageFlexContainer left id='aboutPage'>
            <div className="about">
                <h2 className="about--title" ref={titleRef}>
                    About
                    <hr />
                </h2>
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras orci diam, aliquet porttitor viverra ac, congue et purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam augue in sodales rhoncus. Proin vitae leo sit amet mi pulvinar varius in ac turpis. Sed pretium eros rhoncus, tristique augue id, dignissim dolor.
                </p>
            </div>
            <button onClick={executeScroll}>click</button>
        </PageFlexContainer>
    );
};

export default About;