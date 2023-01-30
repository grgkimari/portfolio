import { AppBar, Box, Container, Typography } from '@mui/material';
import React from 'react';

import './App.css';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Skills from './Components/Skills';
import TopNavigationPane from './Components/TopNavigationPane/TopNavigationPane';

function App() {
  return (
    <div className="App">
      <TopNavigationPane />
      <About />
      <Skills />
      <Contacts />
    </div>
  );
}

export default App;
