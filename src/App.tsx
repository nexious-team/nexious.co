import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { IntlProvider } from 'react-intl';
import AOS from "aos";
import "aos/dist/aos.css";

import { Navbar, ScrollToTop, Footer } from "./components";
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

  const onLangChange = () => {
    const language = lang === 'En' ? 'Km' : 'En';

    setLang(language);
    localStorage.setItem('lang', language);
  }
  const styles = lang === 'Km' ? { fontFamily: 'KhmerOsContent'} : {};

  return (
    <IntlProvider defaultLocale="En" locale={lang} messages={messages[lang]}>
      <Router>
        <ScrollToTop>
          {/* <Dropdown lang={lang} onLangChange={onLangChange}/> */}
          <div style={styles}>
            <Navbar lang={lang} onLangChange={onLangChange}/>
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
              <Footer />
            </div>
          </div>
        </ScrollToTop>
      </Router>
    </IntlProvider>
  );
}

export default App;