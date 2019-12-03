import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline'

import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'

import './styles/sass/_app.scss'

function App() {
  return (
    <>
      < CssBaseline />
      < Home />
      < About />
      < Skills />
      < Projects />
      < Footer />
    </>
  );
}

export default App;
