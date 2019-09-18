import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Link
} from "react-router-dom";
import Footer from "components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import routes from "./routes";

import { Navbar } from "./components";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Router>
      <ScrollToTop>
        <div>
          <Navbar link={Link} location={withRouter(Navbar)} />

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
          <div>
            <Footer></Footer>
          </div>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;