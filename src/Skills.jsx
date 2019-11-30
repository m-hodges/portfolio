import React, { Component } from 'react';

import { 
    PageFlexContainer
} from './styles/styled_components/Containers'
import { ReactComponent as JSIcon } from './icons/JavaScript-logo.svg'

class Skills extends Component {
    state = {
        jsDisplayed: false,
        iconDisplayed: false
    }

    jsHandler = (evt) => {
        //make this module so don't need to repeat for different icons
        console.log(evt.currentTarget.name)

        //define by evt.name
        // if (this.state.iconDisplayed) {
        //     const currentState = Object.entries(this.state)
        //     const entries = currentState.forEach(
        //         element => element[1] = false
        //     )
        //     const newState = Object.fromEntries(entries)
        //     this.setState(newState)
        //     //stop here if current clicked icon is displayed - just turns off current clicked icon (so just add an && condition in if statement)
        //     this.setState({
        //         jsDisplayed: true,
        //         iconDisplayed: true
        //     })
        // } else {
        //     this.setState({
        //         jsDisplayed: true,
        //         iconDisplayed: true
        //     })
        // }
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
                        <button style={{padding: 0}} onClick={this.jsHandler} name='JSIcon'>
                            <JSIcon className="skills--icon"/>
                        </button>
                    </div>
                </div>
            </PageFlexContainer>
        )
    }
}

export default Skills;