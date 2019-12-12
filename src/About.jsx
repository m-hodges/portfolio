import React from 'react';

import { 
    PageFlexContainer
} from './styles/styled_components/Containers'

const About = React.forwardRef((props, ref) => {
    return (
        <PageFlexContainer left ref={ref}>
            <div className="about">
                <h2 className="about--title">
                    About
                    <hr />
                </h2>
                <p> 
                    I am a full-stack developer with a special interest in decentralization, particularly to do with large-scale content distribution networks and the problems that come with the costly storage solutions these platforms rely upon. I am currently building upon my skills on both the front and back-end so that I can further explore this area in the hopes of contributing to or creating new open source solutions to the issue that also, importantly, provides a clean and easy to operate user experience to provide maximum accessibility to the average user.
                </p>
            </div>
        </PageFlexContainer>
    )
})

export default About;