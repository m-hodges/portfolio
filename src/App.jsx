import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline'

import Home from './Home'
import About from './About'
import Projects from './Projects.jsx'

import './styles/sass/_app.scss'

function App() {
  return (
    <>
      < CssBaseline />
      < Home />
      < About />
      < Projects />
    </>
  );
}

export default App;
