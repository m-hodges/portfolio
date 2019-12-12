export default {
    projects: [
        {
            title: 'ChatWell',
            stack: 'Node.js, React, Redux, Express, Socket.io, SQLite3, Styled Components',
            description: 'This was the final group project for the bootcamp I attended, where I took on a leadership role managing a team of five peers over a week of intense work. I also had the responsibility of all the functionality surrounding websockets here, the core component of the app.  This covered the initial server setup with Socket.io, the configuration of the sockets, an algorithm to decide the most desirable connection candidate, and the front-end user experience engaging with this component. I started this project with zero understanding of websockets and completed it with enough competence to fine tune the chat room connections to the specific needs of the project.',
            github: 'https://github.com/m-hodges/chatwell',
            web: 'https://chat-well.herokuapp.com',
            image: 'https://images.unsplash.com/photo-1512547782667-4786bfbd0754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'
        },
        {
            title: 'Blog',
            stack: 'SASS/SCSS, Handlebars, Node.js, Express',
            description: 'A simple blog that was one of the first projects in the bootcamp I attended. This was initially hardcoded in pure HTML and CSS, but I later refactored it with templates to modularize it, Handlebars being the package of choice. That being said, my personal goal for this project was to gain competence in SASS/SCSS, so the focus here was on creating a visually attractive and responsive blog while utilizing the benefits of a preprocessing language rather than expanding functionality to full CRUD routing, which is a stretch goal yet to be addressed.',
            github: 'https://github.com/m-hodges/blog',
            web: 'https://m-hodges-blog.herokuapp.com/',
            image: 'https://images.unsplash.com/photo-1525538182201-02cd1909effb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'
        },
        {
            title: 'Portfolio (WIP)',
            stack: 'React, SASS/SCSS, Styled Components',
            description: 'This project itself, I have aimed for a simple and elegant theme and a clean, crisp user experience. The functionality of this project itself is very minimal, focusing purely on front-end, so I intend to use this as a display of my front-end skills, with future improvements planned to include entirely new themes to further show these off.',
            github: 'https://github.com/m-hodges/portfolio',
            web: '/',
            image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80'
        }
    ],
    skills: [
        {
            technology: 'JavaScript',
            icon: 'js.png',
            description: 'I have a thorough understanding of modern JavaScript and this is currently the language I use the most. I keep up to date with the latest implementations of ES6 and am always looking to improve in this area.'
        },
        {
            technology: 'TypeScript',
            icon: 'ts.png',
            description: 'I am currently upskilling and implementing TypeScript into my new projects, as I can see the benefits of cleaner and clearer structuring of code that the strict rules of this technology enforces.'
        },
        {
            technology: 'React',
            icon: 'react.png',
            description: 'This is my front-end framework of choice due to its rapid speed and the single page web application philosophy it runs on, as well as reusable components allowing for rapid construction of professional front-ends that provide a smooth user experience. I am also familiar with Redux for state management, though am also interested to see where newer features like Hooks can be used to implement this more natively.'
        },
        {
            technology: 'Node',
            icon: 'node.png',
            description: 'Due to my proficiency in JavaScript I naturally currently use Node on the back-end, with Express as the framework of choice for REST routes here.'
        },
        {
            technology: 'C#',
            icon: 'csharp.png',
            description: 'I am currently upskilling to a dedicated back-end language in order to expand what I can do here, especially to do with multi-threaded workloads. I am also learning the .Net framework and will be implementing this stack in my next project.'
        },
        {
            technology: 'Databases',
            icon: 'databases.png',
            description: 'I have experience with both relational and non-relational databases, although my preference lies on the relational side due to the extra peace of mind their strict structuring can give when scalability may be of concern. I am proficient with SQLite3 and the Knex query builder, with some experience with PostGreSQL as well. On the non-relational side, I have some experience with MongoDB.'
        },
        {
            technology: 'HTML5',
            icon: 'html.png',
            description: 'I am proficient with the latest standards of HTML5, ensuring the use of semantic HTML to keep web pages screen-reader friendly. I also have experience with templating technologies like Handlebars and EJS that help to unlock the potential of HTML web pages.'
        },
        {
            technology: 'CSS3',
            icon: 'css.png',
            description: 'Flexbox, Grid, CSS transitions and animations, I ensure to incorporate these all wherever necessary to create smooth and intuitive user experiences. While I also have experience with popular libraries like Bootstrap and Semantic UI, I do prefer to create my own styling from scratch.'
        },
        {
            technology: 'SASS',
            icon: 'sass.png',
            description: 'I absolutely adore SASS and love the way it completely modularizes the experience of writing your own custom stylesheets. I use this in every project now, conforming to the BEM standard to keep class-names logical and easy to read for anyone else that may need to look at my code. I am currently working on my own personal library of container classes that I will be able to use over and over again in upcoming projects.'
        }
    ]
}