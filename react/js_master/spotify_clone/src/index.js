import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {theme, ChakraProvider} from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <App/>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
