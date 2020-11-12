import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';


ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.querySelector('#root'));