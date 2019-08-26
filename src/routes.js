import { Home, Service, About, Client } from './pages';

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
  }
]
