import React, { Component } from 'react'

import AnimationContainer from './AnimationContainer'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

const info = 'project--info';
const infoBanner = 'project--info__banner';
const infoContainer = 'project--info__container';
const infoContent = 'project--info__content';
const icon = 'project--info__icon';

export default class Project extends Component {
    state = {
        isVisible: false,
        info: info,
        infoBanner: infoBanner,
        infoContainer: infoContainer,
        infoContent: `${infoContent} ${infoContent}__truncated`,
        icon: `${icon} ${icon}__flipped`
    }

    clickHandler = () => {
        if (!this.state.isVisible) {
            this.setState({
                isVisible: true,
                info: `${info} ${info}__large`,
                infoBanner: `${this.state.infoBanner} ${this.state.infoBanner}__large`,
                infoContainer: `${this.state.infoContainer} ${this.state.infoContainer}__large`,
                infoContent: infoContent,
                icon: icon
            })
        } else {
            this.setState({
                isVisible: false,
                info: info,
                infoBanner: infoBanner,
                infoContainer: infoContainer,
                infoContent: `${infoContent} ${infoContent}__truncated`,
                icon: `${icon} ${icon}__flipped`
            })
        }
    }

    render () {
        return (
            // <AnimationContainer project>
            <div className="project" style={{backgroundImage: `url(${this.props.image})`}}>
                <div className={this.state.infoBanner}></div>
                <div className={this.state.info}>
                    <div className={this.state.infoContainer}>
                        <h3 className="project--info__title">{this.props.title}</h3>
                            <p className={this.state.infoContent}>
                                <em>
                                    {this.props.stack}
                                </em>
                            </p>
                            {
                                this.state.isVisible && 
                                    <p className="project--info__content project--info__content__description">
                                        | &nbsp; {this.props.description}
                                    </p>
                            }
                    </div>
                    <div className="project--info__icons">
                        <button style={{padding: '0'}} onClick={this.clickHandler}>
                            <ExpandMoreIcon style={{fontSize: '35px'}} className={this.state.icon}/>
                        </button>
                        <a href={this.props.github} target="_blank" rel="noopener noreferrer">
                            <GitHubIcon style={{fontSize: '32px'}} className='project--info__icon'/>
                        </a>
                        <a href={this.props.web} target="_blank" rel="noopener noreferrer">
                            <LanguageIcon style={{fontSize: '35px'}} className='project--info__icon'/>
                        </a>
                    </div>
                </div>
            </div>
            // </AnimationContainer>
        )
    }
}