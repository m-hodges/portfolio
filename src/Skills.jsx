import React, { Component } from 'react';

import { 
    PageFlexContainer
} from './styles/styled_components/Containers'

import data from './data.js'

// import { ReactComponent as JSIcon } from './icons/JavaScript-01.svg'
// import { ReactComponent as TSIcon } from './icons/Typescript-02.svg'
// import { ReactComponent as ReactIcon } from './icons/React-01.svg'
// import { ReactComponent as NodeIcon } from './icons/Node-JS-01.svg'
// import { ReactComponent as CSharpIcon } from './icons/C-Sharp-01.svg'
// import { ReactComponent as DbIcon } from './icons/Database-01.svg'
// import { ReactComponent as HTMLIcon } from './icons/HTML-5-01.svg'
// import { ReactComponent as CSSIcon } from './icons/CSS-3-01.svg'
// import { ReactComponent as SassIcon } from './icons/Sass-01.svg'

class Skills extends Component {
    state = {
        iconDisplayed: false
    }

    clickHandler = (evt) => {
        const currentIcon = `${evt.currentTarget.name}Displayed`
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
            console.log(currentIcon)
            this.setState(newState)
            //may need to be in a callback as set state is async
            this.setState({
                [currentIcon]: true,
                iconDisplayed: true
            })
        } else {
            this.setState({
                [currentIcon]: true,
                iconDisplayed: true
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
                            <hr />
                        </h2>
                    </div>
                    <p className="skills--content"> 
                        I am a full-stack web developer and am thus confident in my skills with technologies involved in both front-end and back-end, with my main areas of expertise currently being React and Node.js. I am also in the process of upskilling my knowledge of back-end technologies by learning C# and the .NET framework, and exploring further implementations of JavaScript like TypeScript.
                    </p>
                    <div className="skills--icons">
                        {data.skills.map((skill, i) => (
                            <button className='skills--button' onClick={this.clickHandler} name={skill.technology} key={i}>
                                <img src={`./icons/${skill.icon}`} alt={`${skill.technology} icon`} className='skills--icon'/>
                            </button>
                        ))}
                        {/* <button className="skills--button" onClick={this.clickHandler} name='jsIcon'>
                            <JSIcon className="skills--icon"/>
                        </button>
                        <button className="skills--button" onClick={this.clickHandler} name='tsIcon'>
                            <TSIcon className="skills--icon"/>
                        </button>
                        <button className="skills--button" onClick={this.clickHandler} name='reactIcon'>
                            <ReactIcon className="skills--icon"/>
                        </button>
                        <button className="skills--button" onClick={this.clickHandler} name='nodeIcon'>
                            <NodeIcon className="skills--icon"/>
                        </button>
                        <button className="skills--button" onClick={this.clickHandler} name='csharpIcon'>
                            <CSharpIcon className="skills--icon"/>
                        </button>
                        <button className="skills--button" onClick={this.clickHandler} name='dbIcon'>
                            <DbIcon className="skills--icon"/>
                        </button>
                        <button className="skills--button" onClick={this.clickHandler} name='htmlIcon'>
                            <HTMLIcon className="skills--icon"/>
                        </button>
                        <button className="skills--button" onClick={this.clickHandler} name='cssIcon'>
                            <CSSIcon className="skills--icon"/>
                        </button>
                        <button className="skills--button" onClick={this.clickHandler} name='sassIcon'>
                            <SassIcon className="skills--icon"/>
                        </button> */}
                    </div>
                    <div className="skills--info">
                        {this.state.iconDisplayed && 
                            <p className="skills--info__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie est quam, at dapibus arcu blandit et. In sit amet est accumsan, dignissim sapien at, bibendum nulla.
                            </p>
                        }
                    </div>
                </div>
            </PageFlexContainer>
        )
    }
}

export default Skills;