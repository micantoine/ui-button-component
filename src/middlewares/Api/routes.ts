import type UIComponents from '../../models/UIComponent';

export enum ApiRouteTypes {
  BUTTON = 'button',
  PILL = 'pill',
}

export interface ApiRouteResponseData<D> {
  data: D;
}

export interface ApiRouteResponse {
  [ApiRouteTypes.BUTTON]: ApiRouteResponseData<UIComponents[]>,
  [ApiRouteTypes.PILL]: ApiRouteResponseData<UIComponents[]>,
}

export const routes: Record<ApiRouteTypes, string> = {
  [ApiRouteTypes.BUTTON]: '/button.json',
  [ApiRouteTypes.PILL]: '/pill.json',
}