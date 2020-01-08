import React, { Component } from 'react'

import { 
    PageFlexContainer
} from './styles/styled_components/Containers'
import AnimationContainer from './AnimationContainer'

import data from './data.js'

class Skills extends Component {
    state = {
        iconDisplayed: false
    }

    clickHandler = (evt) => {
        const currentIcon = evt.currentTarget.name
        if (this.state.iconDisplayed && this.state[currentIcon]) {
            this.setState({
                [currentIcon]: false,
                iconDisplayed: false
            })
        }
        else if (this.state.iconDisplayed) {
            const currentState = Object.entries(this.state)
            const entries = currentState.map(
                element => {
                    element[1] = false;
                    return [
                        element[0],
                        element[1]
                    ]
                }
            )
            const newState = Object.fromEntries(entries)
            this.setState(newState)
            const content = data.skills.filter((skill) => (
                skill.technology === currentIcon
            ))
            this.setState({
                [currentIcon]: true,
                iconDisplayed: true,
                content: content[0].description
            })
        } else {
            const content = data.skills.filter((skill) => (
                skill.technology === currentIcon
            ))
            this.setState({
                [currentIcon]: true,
                iconDisplayed: true,
                content: content[0].description
            })
        }
    }


    render() {
        return (
            <PageFlexContainer right>
                <div className="skills">
                    <div className="skills--title__container">
                        <h2 className="skills--title">
                            Skills
                            <AnimationContainer hr>
                                <hr />
                            </AnimationContainer>
                        </h2>
                    </div>
                    <p className="skills--content"> 
                        <AnimationContainer content>
                            I am a full-stack web developer and am thus confident in my skills with technologies involved in both front-end and back-end, with my main areas of expertise currently being React and Node.js. I am also in the process of upskilling my knowledge of back-end technologies by learning C# and the .NET framework, and exploring further implementations of JavaScript like TypeScript.
                        </AnimationContainer>
                    </p>
                    <div className="skills--icons">
                        {data.skills.map((skill, i) => (
                            <button className='skills--button' onClick={this.clickHandler} name={skill.technology} key={i}>
                                <AnimationContainer content>
                                    <img src={`./icons/${skill.icon}`} alt={`${skill.technology} icon`} className='skills--icon'/>
                                </AnimationContainer>
                            </button>
                        ))}
                    </div>
                    <div className="skills--info">
                        {this.state.iconDisplayed && 
                            <p className="skills--info__text">
                                {this.state.content}
                            </p>
                        }
                    </div>
                    {/* <div className='skills--image__container'>
                        <img src="/images/seperate-26985.png" alt="skills" className='skills--image'/>
                    </div> */}
                </div>
            </PageFlexContainer>
        )
    }
}

export default Skills
