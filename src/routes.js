import { Home, Service, About } from './pages';

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
  }
]
