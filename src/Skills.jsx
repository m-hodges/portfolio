import React, { Component } from 'react';

import { 
    PageFlexContainer
} from './styles/styled_components/Containers'
import { ReactComponent as JSIcon } from './icons/JavaScript-logo.svg'

class Skills extends Component {
    state = {
        jsIconDisplayed: false,
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
            const entries = currentState.forEach(
                element => element[1] = false
            )
            const newState = Object.fromEntries(entries)
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


    render(){
        return (
            <PageFlexContainer right id='skillsPage'>
                <div className="skills">
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
                    </div>
                </div>
            </PageFlexContainer>
        )
    }
}

export default Skills;