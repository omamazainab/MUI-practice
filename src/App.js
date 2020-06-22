import React from 'react';
import './App.css';
import {Copyright} from './components/Copyright';
import Header from './components/Header';
import Container from '@material-ui/core/Container';
import {Chart} from './components/Chart'

function App() {
  return (
    
    <Container  maxWidth="">
      <Header></Header>
      <Chart></Chart>
      <Copyright />
    </Container>
    
  );
}

export default App;
