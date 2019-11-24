import React from 'react';

import { 
    PageGridContainer,
    GridItem
} from './styled_components/Containers'

const About = () => {
    return (
        <PageGridContainer>
            <GridItem about>
                <div>
                    <h1>
                        About Me
                        <hr/>
                    </h1>
                </div>
                <div>
                    <p>
                        Quaerat sint quas voluptatibus. Animi est blanditiis omnis doloribus laboriosam placeat. Cum ratione quibusdam fugiat ut. Quae perferendis qui non ut. Sint quasi pariatur eum quia qui tempora dignissimos aliquid.

                        Ut quia rerum fugiat. Nam cum excepturi ut dolorum voluptatem neque. Mollitia illum quos fuga est. Totam quisquam dolorem alias nobis.

                        Totam occaecati illum dicta consequatur sed dolore eligendi. Nam quo est iste ullam. Id qui et molestias magni inventore facere vel qui. Aperiam ut quos harum deleniti magni earum dolor et. Commodi autem voluptate magnam et reprehenderit corporis aut enim. Libero libero consequatur expedita unde et.

                        Qui sit deleniti consectetur vel reiciendis eos. Harum praesentium dolor quos. Reprehenderit reprehenderit qui quisquam maxime earum ut ipsum. Doloremque magni officia voluptates.

                        Officia iusto placeat quis aut. Enim sunt voluptatem eligendi enim libero laboriosam soluta. Rerum sapiente veritatis dolorum tempora aut pariatur. Voluptatibus consequatur quia odio.
                    </p>
                </div>
            </GridItem>
            <GridItem contact>
                <h2>
                    Contact
                    <hr/>
                </h2>
                <p>
                    <a href="https://github.com/m-hodges">Github</a>
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/michael-hodges-124089b4">LinkedIn</a>
                </p>
                <p>
                    <a href="mailto: michaelcshodges@gmail.com">Email</a>
                </p>
            </GridItem>
            <GridItem cv>
                <h2>
                    Curriculum Vitae
                    <hr/>
                </h2>
            </GridItem>
            <GridItem skills>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h1>Skills</h1>
                </div>
                <div>

                </div>
            </GridItem>
        </PageGridContainer>
    );
};

export default About;