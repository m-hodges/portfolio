import React from 'react';

import Project from './Project'
import { PageFlexContainer } from './styles/styled_components/Containers'

const Projects = () => {
    return (
        <PageFlexContainer style={{justifyContent: 'flex-start'}}>
            <h2>
                Projects
                <hr />
            </h2>
            <div>
                <Project />
            </div>
        </PageFlexContainer>
    );
};

export default Projects;