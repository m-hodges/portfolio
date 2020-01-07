import React, { useEffect } from 'react';

import { 
    PageFlexContainer
} from './styles/styled_components/Containers'
import AnimationContainer from './AnimationContainer'

// eslint-disable-next-line
let windowWidth = window.innerWidth
// eslint-disable-next-line
let windowHeight = window.innerHeight

const About = React.forwardRef((props, ref) => {
    useEffect(() => {
        window.addEventListener('resize', () => {
            windowWidth = window.innerWidth
            windowHeight = window.innerHeight
        })
    })
    return (
        <PageFlexContainer left ref={ref} >
            <div className='about--container'>
                <div className="about">
                    <h2 className="about--title">
                        About
                        <AnimationContainer hr>
                            <hr />
                        </AnimationContainer>
                    </h2>
                    <AnimationContainer content>
                    <p> 
                        I am a full-stack developer with a special interest in decentralization, particularly to do with large-scale content distribution networks and the problems that come with the costly storage solutions these platforms rely upon. I am currently building upon my skills on both the front and back-end so that I can further explore this area in the hopes of contributing to or creating new open source solutions to the issue that also, importantly, provides a clean and easy to operate user experience to provide maximum accessibility to the average user.
                    </p>
                    </AnimationContainer>
                </div>
                {/* {
                    (windowWidth >= 1000 && windowHeight >= 500) ?  */}
                        <AnimationContainer content>
                            <div className='about--image__container'>
                                    <img src="/images/images_clip-art_Angelo_Gemmi_Angelo_Gemmi_geometric_motif.png" alt="about" className='about--image'/>
                            </div>
                        </AnimationContainer>
                    {/* : null
                } */}

            </div>
        </PageFlexContainer>
    )
})

export default About;