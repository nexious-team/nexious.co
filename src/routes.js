import { Home, Service, About, PagesClient,GetStart,Contact, CardPage } from './pages';

const routes = [
  {
    exact: true,
    path: "/",
    component: Home
  },
  {
    path: "/service",
    component: Service
  },
  {
    path: "/card",
    component: CardPage,
  },
  {
    path: "/about",
    component: About
  }  ,
  {
    path: "/client",
    component: PagesClient
  },
  {
    path: "/get-start",
    component: GetStart
  },
  {
    path: "/contact",
    component: Contact
  }
]

export default routes
