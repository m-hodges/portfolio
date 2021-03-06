import React from 'react';

import Project from './Project'
import { PageFlexContainer } from './styles/styled_components/Containers'
import AnimationContainer from './AnimationContainer'

import data from './data.js'

const Projects = () => {
    return (
        <PageFlexContainer style={{justifyContent: 'flex-start', height: 'auto'}}>
            <h2>
                Projects
                <AnimationContainer hr>
                    <hr />
                </AnimationContainer>
            </h2>
            <AnimationContainer project>
            <div>
                {data.projects.map((project, i) => (
                    < Project 
                        title={project.title}
                        stack={project.stack}
                        description={project.description}
                        github={project.github}
                        web={project.web}
                        image={project.image}
                        key={i}
                    />
                ))}
            </div>
            </AnimationContainer>
        </PageFlexContainer>
    );
};

export default Projects;