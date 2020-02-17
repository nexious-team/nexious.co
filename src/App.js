import React, { useEffect, useState } from "react";
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

import messages_kh from "./translations/km";
import messages_en from "./translations/en";
import { Navbar } from "./components";
import AOS from "aos";
import "aos/dist/aos.css";

const messages = {
  'km': messages_kh,
  'en': messages_en
};

function App() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en')

  useEffect(() => {
    AOS.init();
  });

  const onLangChange = (e) => {
    setLang(e.target.value)
    localStorage.setItem('lang', e.target.value)
  }
  return (
    <IntlProvider defaultLocale="en" locale={lang} messages={messages[lang]}>
      <Router>
        <ScrollToTop>
          <div className="fixed z-60 ml-2 mt-16 top-0">
            <select className="p-1" value={lang} onChange={onLangChange}>
              <option value="en">En</option>
              <option value="km">Km</option>
            </select>
          </div>
          <div>
            <Navbar link={Link} location={withRouter(Navbar)} lang={lang} onLangChange={onLangChange} />
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
    </IntlProvider>
  );
}

export default App;