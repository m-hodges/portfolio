import React, { Component } from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

export default class Project extends Component {
    state = {
        isVisible: false
    }

    clickHandler = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    render () {
        return (
            <div className="project" style={{backgroundImage: `url(${this.props.image})`}}>
                <div className='project--info__banner'></div>
                <div className="project--info">
                    <div className="project--info__container">
                        <h3 className="project--info__title">{this.props.title}</h3>
                        <p className="project--info__content">
                            <em>
                                {this.props.stack}
                            </em>
                            {/* set up truncation script */}
                        </p>
                        {
                            this.state.isVisible && 
                            <p>
                                {this.props.description}
                            </p>
                        }
                    </div>
                    <div className="project--info__icons">
                        <button style={{padding: '0'}} onClick={this.clickHandler}>
                            <ExpandMoreIcon style={{fontSize: '35px'}} className='project--info__icon project--info__icon__flipped'/>
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
        )
    }
}