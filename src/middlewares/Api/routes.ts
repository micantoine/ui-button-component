// Dummy Api
import type UIComponents from '../../models/UIComponent';

export enum ApiRouteTypes {
  BUTTON = 'button',
}

export interface ApiRouteResponseData<D> {
  data: D;
}

export interface ApiRouteResponse {
  [ApiRouteTypes.BUTTON]: ApiRouteResponseData<UIComponents[]>,
}

export const routes: Record<ApiRouteTypes, string> = {
  [ApiRouteTypes.BUTTON]: '/button.json',
}