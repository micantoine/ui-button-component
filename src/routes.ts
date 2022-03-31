export enum RouteTypes {
  HOME = 'HOME',
  MATERIAL_UI = 'MATERIAL_UI',
  MATERIAL_UI_BUTTON = 'MATERIAL_UI_BUTTON',
  MATERIAL_UI_PILL = 'MATERIAL_UI_PILL',
}

export type Route = { title: string; path: string; };
export type Routes = Record<RouteTypes, Route>

export const routes: Routes = {
  [RouteTypes.HOME]: {
    title: 'Dashboard',
    path: '/'
  },
  [RouteTypes.MATERIAL_UI]: {
    title: 'Material UI',
    path: '/material-ui'
  },
  [RouteTypes.MATERIAL_UI_BUTTON]: {
    title: 'Button',
    path: '/material-ui/button'
  },
  [RouteTypes.MATERIAL_UI_PILL]: {
    title: 'Pill',
    path: '/material-ui/pill'
  },
}

/**
 * Get route information
 * @param url the url to get the route info from
 * @returns the route information
 */
export const getRoute = (url: string): Route | null => {
  let route: Route | null = null;
  const routeKeys = Object.keys(RouteTypes) as unknown as Array<RouteTypes>;

  for (let i = 0; i < routeKeys.length; i+=1) {
    const key = routeKeys[i];
    const currentRoute = routes[key];
    if (currentRoute.path === url) {
      route = currentRoute;
      break;
    }
  }

  return route;
}