

import { RoutesString } from '../Components/Modules/routesString';
import PageErr from '../Components/Pages/404/PageErr';
import Home from '../Components/Pages/Home';

const pages = [
  {
    path: RoutesString.PageNotFound,
    component: PageErr,
    exact: true,
  },

  /* Home */
  {
    path: RoutesString.Home,
    component: Home,
    exact: true,
  }
  
];

export default pages;
