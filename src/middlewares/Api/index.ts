// Dummy Api
import { ApiRouteTypes, type ApiRouteResponse, routes } from './routes';

interface ApiResponse<T extends { data: any; } = any> {
  success: boolean;
  data?: T['data'];
  error?: string;
  status: number;
}

type ApiRequest = {
  success: boolean;
  status: number;
  data?: any;
  error?: string
};

interface ApiRequestOptions {
  method: string;
}

class HTTP {
  protected getHeaders = (): HeadersInit => {
    const headers = new Headers({
      contentType: 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    });

    return headers;
  };

  protected request = async (
    routeName: ApiRouteTypes,
    opts: ApiRequestOptions
  ): Promise<ApiRequest> => {
    const route = routes[routeName];

    const options: RequestInit = {
      method: opts.method,
      headers: this.getHeaders(),
    };

    // eslint-disable-next-line no-restricted-globals
    const endpoint = `${location.origin}/data/${route}`;
  
    try {
      const response = await fetch(endpoint, options);
      const responseJson = await response.json();

      if (response.ok) {
        return {
          success: true,
          status: response.status,
          data: responseJson,
        };
      }

      return {
        success: false,
        status: response.status,
        error: responseJson.error
      };
    } catch (err: any) {
      return {
        success: false,
        error: err,
        status: 500,
      };
    }
  };

  /**
   * Http GET Method
   */
  public get = async <T extends ApiRouteTypes>(
    route: T
  ): Promise<ApiResponse<ApiRouteResponse[T]>> => {
    const response = await this.request(route, { method: 'GET' });
    return response;
  };
}

export const Api = new HTTP();
export { ApiRouteTypes }