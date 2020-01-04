import React, { useState, useEffect } from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { PageFlexContainer } from './styles/styled_components/Containers'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const Home = React.forwardRef((props, ref) => {
    const executeScroll = () => scrollToRef(ref)
    let [count, setCount] = useState(0)
    useEffect(() => {
        const randomCount = (max) => (
            Math.floor(Math.random() * Math.floor(max))
        )
        // console.log(randomCount(3))
        const intervalTimer = setInterval(() => setCount(randomCount(3)), 3000)
        return () => clearInterval(intervalTimer)
    })


    return (
        <PageFlexContainer>
            <div className='spacer'></div>
            <div className="title">
                {/* eslint-disable-next-line  */}
                <h1 className="title--text title--text__fn"></h1>
                <h1 className="title--text__center"> | </h1>
                {/* eslint-disable-next-line  */}
                <h1 className="title--text title--text__in"></h1>
            </div>
            <div className='subtitle'>
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
                {/* <a href="/" className='continue' onClick={scrollToRef} >
                        <ExpandMoreIcon fontSize='large' className='icon'/>
                </a> */}
            </div>
        </PageFlexContainer>
    )
})



export default Home;