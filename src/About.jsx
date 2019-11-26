import React from 'react';

import { 
    PageGridContainer,
    GridItem
} from './styles/styled_components/Containers'

const About = () => {
    return (
        <PageGridContainer id='aboutPage'>
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
                <hr/>
                <div style={{display: "flex", justifyContent: "space-between", padding: "40px 40px"}}>
                    <a href="https://github.com/m-hodges" target="_blank" rel="noopener noreferrer">
                        <img src='/icons/github-brands.svg' alt='Github'></img>
                    </a>
                    <a href="https://www.linkedin.com/in/michael-hodges-124089b4" target="_blank" rel="noopener noreferrer">
                        <img src='/icons/linkedin-brands.svg' alt='LinkedIn'></img>
                    </a>
                    {/* eslint-disable-next-line */}
                    <a href="/other/mhodges_cv.pdf" target="_blank" rel="noopener noreferrer">
                        <img src='/icons/file-pdf-solid.svg' alt='CV'></img>
                    </a>
                    <a href="mailto: michaelcshodges@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src='/icons/envelope-solid.svg' alt='Email'></img>
                    </a>
                </div>
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