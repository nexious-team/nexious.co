import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Link
} from "react-router-dom";
import { IntlProvider } from 'react-intl';
import AOS from "aos";
import "aos/dist/aos.css";

import { Navbar, ScrollToTop, Footer } from "./components";
import { Dropdown } from "elements";
import routes from "./routes";

import messages_kh from "./translations/km";
import messages_en from "./translations/en";

const messages = {
  'Km': messages_kh,
  'En': messages_en
};

function App() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'En')

  useEffect(() => {
    AOS.init();
  });

  const onLangChange = (language) => {
    setLang(language)
    localStorage.setItem('lang', language)
  }
  return (
    <IntlProvider defaultLocale="En" locale={lang} messages={messages[lang]}>
      <Router>
        <ScrollToTop>
          <Dropdown lang={lang} onLangChange={onLangChange}/>
          <div>
            <Navbar link={Link} location={withRouter(Navbar)} lang={lang} />
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