import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './routes';
import AOS from 'aos';
import { Navbar } from './components'
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Router>
      <div>
        <Navbar link={Link} />

        {routes.map((route, i) => (
            <Route
              key={i}
              exact={route.exact}
              path={route.path}
              render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} />
              )}
            />
        ))}
      </div>
    </Router>
  );
}

export default App;
