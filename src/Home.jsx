import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { PageFlexContainer } from './styles/styled_components/Containers'

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
    const scrollToRef = (ref) => ref.current.scrollIntoView({behavior: 'smooth'})
    const randomCount = (max) => (
        Math.floor(Math.random() * Math.floor(max))
    )
    const executeScroll = () => scrollToRef(ref)
<<<<<<< HEAD
=======
    const [count, setCount] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    const [showTitle, setShowTitle] = useState(false)
    useEffect(() => {
        window.addEventListener('resize', () => {
            windowWidth = window.innerWidth
        })
        window.addEventListener('load', () => {
            setIsLoaded(true)
        })
        setShowTitle(true)
        setTimeout(() => setShowTitle(false), 4000)
        const intervalTimer = setInterval(() => {
                let newCount = randomCount(3)
                while (count === newCount) {
                    newCount = randomCount(3)
                }
                setShowTitle(true)
                setCount(newCount)
                setTimeout(() => setShowTitle(false), 4000)
            }
        , 5000)
        return () => clearInterval(intervalTimer)
    }, [count])
>>>>>>> bd0ea1c292e5406561aa811ac304e0a2576ae10c

    return (
        <PageFlexContainer className='mobile__landscape'>
            <div className='spacer'></div>
            <div className="title">
                <CSSTransition 
                    in={showTitle} 
                    timeout={500}
                    classNames="title--transitions"
                    unmountOnExit
                >
                    <h1 className='title--text title--text__fn'> 
                        {
                            (windowWidth >= 550) 
                                ? titleText.functionalText[count] 
                                : titleText.fnText[count]
                        }
                    </h1>
                </CSSTransition>
                <h1 className="title--text__center"> | </h1>
                <CSSTransition 
                    in={showTitle} 
                    timeout={500}
                    classNames="title--transitions"
                    unmountOnExit
                >
                    <h1 className='title--text title--text__in'>
                        {
                            (windowWidth >= 550) 
                                ? titleText.creativeText[count] 
                                : titleText.crText[count]
                        }
                    </h1>
                </CSSTransition>
            </div>

            <div className={`subtitle fade-in ${isLoaded && 'fade-in--visible'}`}>
                    <div className='subtitle--text subtitle--text__main'>
                        Michael Hodges
                        <hr className='subtitle--separator' />
                    </div>
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