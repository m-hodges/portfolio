import React from 'react';

import { 
    PageGridContainer 
} from './styled_components/Containers'

const About = () => {
    return (
        <PageGridContainer>
            <div style={{gridRow: 1 / 1}}>
                <h1>About Me</h1>
                <p>
                    Quaerat sint quas voluptatibus. Animi est blanditiis omnis doloribus laboriosam placeat. Cum ratione quibusdam fugiat ut. Quae perferendis qui non ut. Sint quasi pariatur eum quia qui tempora dignissimos aliquid.

                    Ut quia rerum fugiat. Nam cum excepturi ut dolorum voluptatem neque. Mollitia illum quos fuga est. Totam quisquam dolorem alias nobis.

                    Totam occaecati illum dicta consequatur sed dolore eligendi. Nam quo est iste ullam. Id qui et molestias magni inventore facere vel qui. Aperiam ut quos harum deleniti magni earum dolor et. Commodi autem voluptate magnam et reprehenderit corporis aut enim. Libero libero consequatur expedita unde et.

                    Qui sit deleniti consectetur vel reiciendis eos. Harum praesentium dolor quos. Reprehenderit reprehenderit qui quisquam maxime earum ut ipsum. Doloremque magni officia voluptates.

                    Officia iusto placeat quis aut. Enim sunt voluptatem eligendi enim libero laboriosam soluta. Rerum sapiente veritatis dolorum tempora aut pariatur. Voluptatibus consequatur quia odio.
                </p>
            </div>
            <div style={{gridRow: 2 / 1}}>
                <h2>Contact</h2>
            </div>
            <div style={{gridRow: 3 / 1}}>
                <h2>CV</h2>
            </div>
            <div style={{gridArea: 1 / 2 / 3 / 2 }}>
                <h2>Skills</h2>
            </div>
        </PageGridContainer>
    );
};

export default About;