import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleLeft,faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
 
library.add(faArrowCircleLeft,faArrowCircleRight)
 

ReactDOM.render(<App />, document.getElementById('root'));
