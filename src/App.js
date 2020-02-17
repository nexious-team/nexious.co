import React, { useEffect, useReducer, createContext } from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Link
} from "react-router-dom";
import Footer from "components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import routes from "./routes";
import { IntlProvider } from 'react-intl';
import { initialState, reducer, TYPES } from './store';

import messages_kh from "./translations/km";
import messages_en from "./translations/en";
import { Navbar } from "./components";
import AOS from "aos";
import "aos/dist/aos.css";

export const StoreContext = createContext();

const messages = {
  'km': messages_kh,
  'en': messages_en
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    AOS.init();
  });

  const onLangChange = (e) => {
    dispatch({type: TYPES.CHANGE_LANGUAGE, payload: { language: e.target.value }});
  }
  return (
    <IntlProvider defaultLocale="en" locale={state.language} messages={messages[state.language]}>
      <Router>
        <ScrollToTop>
          <div className="fixed z-60 ml-2 mt-16 top-0">
            <select className="p-1" value={state.language} onChange={onLangChange}>
              <option value="en">En</option>
              <option value="km">Km</option>
            </select>
          </div>
          <StoreContext.Provider value={{ state }}>
            <Navbar link={Link} location={withRouter(Navbar)} lang={state.language} onLangChange={onLangChange} />
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
          </StoreContext.Provider>
        </ScrollToTop>
      </Router>
    </IntlProvider>
  );
}

export default App;