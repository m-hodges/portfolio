import React from 'react';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { PageFlexContainer } from './styles/styled_components/Containers'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
// const windowWidth = window.screen.width

const Home = React.forwardRef((props, ref) => {
    const executeScroll = () => scrollToRef(ref)
    return (
        <PageFlexContainer>
            <div className='spacer'></div>
            <div className="title">
                <h1 className="title--text title--text__fn"></h1>
                <h1 className="title--text__center"> | </h1>
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