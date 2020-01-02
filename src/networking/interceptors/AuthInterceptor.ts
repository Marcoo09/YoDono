import axios, {AxiosRequestConfig} from 'axios';
import {AuthEndpoints} from '../endpoints';
import {Session} from '../../types/Session/session';

let authInterceptorId: number | null = null;

export const setupAuthInterceptor = (session: Session) => {
  const interceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
    if (config.url && config.url.includes(AuthEndpoints.LOGIN)) {
      return config;
    }
    config.headers.authorization = `${session.token_type} ${session.access_token}`;
    return config;
  };
  const interceptorId = axios.interceptors.request.use(interceptor, error =>
    Promise.reject(error),
  );
  authInterceptorId = interceptorId;
};

export const clearAuthInterceptor = () => {
  if (authInterceptorId !== null) {
    axios.interceptors.request.eject(authInterceptorId);
    authInterceptorId = null;
  }
};
