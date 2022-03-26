export enum RouteTypes {
  HOME = 'HOME',
  MATERIAL_UI = 'MATERIAL_UI',
  MATERIAL_UI_BUTTON = 'MATERIAL_UI_BUTTON',
  MATERIAL_UI_CARD = 'MATERIAL_UI_CARD',
}

export type Route = { title: string; path: string; };
export type Routes = Record<RouteTypes, Route>

export const routes: Routes = {
  [RouteTypes.HOME]: {
    title: 'Home',
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
  [RouteTypes.MATERIAL_UI_CARD]: {
    title: 'Card',
    path: '/material-ui/card'
  },
}