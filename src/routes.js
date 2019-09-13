import { Home, Service, About, PagesClient,GetStart } from './pages';

export default [
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
  }
]
