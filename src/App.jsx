import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline'

import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'

import './styles/sass/_app.scss'

function App() {
  const aboutRef = React.createRef()
  return (
    <>
      < CssBaseline />
      < Home ref={aboutRef} />
      < About ref={aboutRef} />
      < Skills />
      < Projects />
      < Footer />
    </>
  );
}

export default App;
