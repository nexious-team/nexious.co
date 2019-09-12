import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
 
library.add(faChevronCircleRight,faChevronCircleLeft)
 

ReactDOM.render(<App />, document.getElementById('root'));
