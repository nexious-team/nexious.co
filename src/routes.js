import { Home, Service, About, Client,GetStart } from './pages';

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
    component: Client
  },
  {
    path: "/get-start",
    component: GetStart
  }
]
