import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faAngleDoubleDown,
  faChevronCircleRight,
  faChevronCircleLeft,
  faEnvelope,
  faMapMarkedAlt,
  faGlobeAsia,
  faAngleDown,
  faQuoteLeft,
  faQuoteRight,
  faWindowMaximize,
  faMobileAlt,
  faPencilRuler,
  faWindowRestore,
  faPenNib,
  faGlobeAmericas,
  faAddressCard,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(
  fab as any,
  faArrowCircleLeft as any,
  faArrowCircleRight as any,
  faAngleDoubleDown as any,
  faChevronCircleRight as any,
  faChevronCircleLeft as any,
  faEnvelope as any,
  faMapMarkedAlt as any,
  faGlobeAsia as any,
  faAngleDown as any,
  faQuoteLeft as any,
  faQuoteRight as any,
  faWindowMaximize as any,
  faMobileAlt as any,
  faPencilRuler as any,
  faWindowRestore as any,
  faPenNib as any,
  faGlobeAmericas as any,
  faAddressCard as any,
  faPhone as any
);

ReactDOM.render(<App />, document.getElementById("root"));
