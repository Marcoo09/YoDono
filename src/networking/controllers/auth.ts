import {AxiosPromise} from 'axios';
import HttpService from '../HttpService';
import {AuthEndpoints} from '../endpoints';
import {UserModel} from '../../types/User/user';

export interface IAuthController {
  createAccount(user: UserModel): AxiosPromise<any>;
  login(email: string, password: string): AxiosPromise<any>;
}

class AuthController implements IAuthController {
  createAccount(user: UserModel): AxiosPromise<any> {
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };
    return HttpService.post(AuthEndpoints.CREATE_ACCOUNT, user, config);
  }
  login(email: string, password: string): AxiosPromise<any> {
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };
    return HttpService.post(AuthEndpoints.LOGIN, {email, password}, config);
  }
}

export default new AuthController();
