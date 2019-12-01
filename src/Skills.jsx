import React, { Component } from 'react';

import { 
    PageFlexContainer
} from './styles/styled_components/Containers'

import { ReactComponent as JSIcon } from './icons/JavaScript-01.svg'
import { ReactComponent as TSIcon } from './icons/Typescript-02.svg'
import { ReactComponent as ReactIcon } from './icons/React-01.svg'
import { ReactComponent as NodeIcon } from './icons/Node-JS-01.svg'
import { ReactComponent as CSharpIcon } from './icons/C-Sharp-01.svg'
import { ReactComponent as DbIcon } from './icons/Database-01.svg'
import { ReactComponent as HTMLIcon } from './icons/HTML-5-01.svg'
import { ReactComponent as CSSIcon } from './icons/CSS-3-01.svg'
import { ReactComponent as SassIcon } from './icons/Sass-01.svg'

// import { ReactComponent as JSIcon } from './icons/JavaScript-logo.svg'
// import { ReactComponent as TSIcon } from './icons/typescriptlang-icon.svg'
// import { ReactComponent as ReactIcon } from './icons/react-1.svg'

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
            <PageFlexContainer right id='skillsPage'>
                <div className="skills">
                    <div className="skills--content">
                        <h2 className="skills--title">
                            Skills
                            <hr />
                        </h2>
                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras orci diam, aliquet porttitor viverra ac, congue et purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam augue in sodales rhoncus. Proin vitae leo sit amet mi pulvinar varius in ac turpis. Sed pretium eros rhoncus, tristique augue id, dignissim dolor.
                        </p>
                        <div className="skills--icons">
                            <button style={{padding: 0}} onClick={this.clickHandler} name='jsIcon'>
                                <JSIcon className="skills--icon"/>
                            </button>
                            <button style={{padding: 0}} onClick={this.clickHandler} name='tsIcon'>
                                <TSIcon className="skills--icon"/>
                            </button>
                            <button style={{padding: 0}} onClick={this.clickHandler} name='reactIcon'>
                                <ReactIcon className="skills--icon"/>
                            </button>
                            <button style={{padding: 0}} onClick={this.clickHandler} name='nodeIcon'>
                                <NodeIcon className="skills--icon"/>
                            </button>
                            <button style={{padding: 0}} onClick={this.clickHandler} name='csharpIcon'>
                                <CSharpIcon className="skills--icon"/>
                            </button>
                            <button style={{padding: 0}} onClick={this.clickHandler} name='dbIcon'>
                                <DbIcon className="skills--icon"/>
                            </button>
                            <button style={{padding: 0}} onClick={this.clickHandler} name='htmlIcon'>
                                <HTMLIcon className="skills--icon"/>
                            </button>
                            <button style={{padding: 0}} onClick={this.clickHandler} name='cssIcon'>
                                <CSSIcon className="skills--icon"/>
                            </button>
                            <button style={{padding: 0}} onClick={this.clickHandler} name='sassIcon'>
                                <SassIcon className="skills--icon"/>
                            </button>
                        </div>
                    </div>
                    <div className="skills--info">
                        {this.state.iconDisplayed && 
                            <p className="skills--info__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie est quam, at dapibus arcu blandit et. In sit amet est accumsan, dignissim sapien at, bibendum nulla.
                            </p>
                        }
                    </div>
                    {/* ideally would like the info text to line up perfectly with the main text content */}
                    {/* need restructure of main grid container for this to happen and have perfectly aligned components with about page */}
                </div>
            </PageFlexContainer>
        )
    }
}

export default Skills;