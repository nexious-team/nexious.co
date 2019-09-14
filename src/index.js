import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'

import { faArrowCircleLeft,faArrowCircleRight, faAngleDoubleDown, faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons' 
 
library.add(fab, faArrowCircleLeft,faArrowCircleRight, faAngleDoubleDown, faChevronCircleRight,faChevronCircleLeft)

ReactDOM.render(<App />, document.getElementById('root'));
