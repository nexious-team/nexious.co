import "./styles.css";
import React from "react";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { createRoot } from 'react-dom/client';

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

// createRoot(document.getElementById("root")!).render(<App />);

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
