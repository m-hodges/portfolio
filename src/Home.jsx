import React, { useState, useEffect } from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { PageFlexContainer } from './styles/styled_components/Containers'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
const randomCount = (max) => (
    Math.floor(Math.random() * Math.floor(max))
)
let windowWidth = window.innerWidth
const titleText = {
    functionalText: [
        'Functional',
        'Practical',
        'Operative'
    ],
    creativeText: [
        'Innovative',
        'Creative',
        'Visionary'
    ],
    fnText: [
        'Fn',
        'Pr',
        'Op'
    ],
    crText: [
        'In',
        'Cr',
        'Vs'
    ]
}

const Home = React.forwardRef((props, ref) => {
    const executeScroll = () => scrollToRef(ref)
    const [count, setCount] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        window.addEventListener('resize', () => {
            windowWidth = window.innerWidth
        })
        window.addEventListener('load', () => {
            setIsLoaded(true)
        })
        const intervalTimer = setInterval(() => setCount(randomCount(3)), 3000)
        return () => clearInterval(intervalTimer)
    })

    return (
        <PageFlexContainer className='mobile__landscape'>
            <div className='spacer'></div>
            <div className="title">
                <h1 className='title--text title--text__fn'>
                    {
                        (windowWidth >= 550) 
                            ? titleText.functionalText[count] 
                            : titleText.fnText[count]
                    }
                </h1>
                <h1 className="title--text__center"> | </h1>
                <h1 className='title--text title--text__in'>
                    {
                        (windowWidth >= 550) 
                            ? titleText.creativeText[count] 
                            : titleText.crText[count]
                    }
                </h1>
            </div>

            <div className={`subtitle fade-in ${isLoaded && 'fade-in--visible'}`}>
                    <p className='subtitle--text subtitle--text__main'>
                        Michael Hodges
                        <hr className='subtitle--separator' />
                    </p>
                    <p className='subtitle--text subtitle--text__sub'>Fullstack Web Developer</p>
            </div>
            <div className='spacer spacer--container'>
                <button className='continue' onClick={executeScroll}>
                    <ExpandMoreIcon fontSize='large' className='icon'/>
                </button>
            </div>
        </PageFlexContainer>
    )
})



export default Home;