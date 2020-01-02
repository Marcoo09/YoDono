import {ActionCreator} from 'redux';
import {ThunkResult, ExtraArguments} from '../../types';
import {AuthActions, AuthState} from './types';
import {UserModel} from '../../../types/User/user';
import {ThunkDispatch} from 'redux-thunk';
import {actionTypes} from './actionTypes';
import {SetupInterceptors} from '../../../networking/interceptors/SetupInterceptors';
import {persistSession} from '../../../common/sessionPersistence';
import {get} from 'lodash';
import {AxiosResponse} from 'axios';
import {Session} from '../../../types/Session/session';

export const setSession = async (
  result: AxiosResponse<Session>,
): Promise<void> => {
  const session = get(result, 'data');
  if (session) {
    await persistSession(session);
    SetupInterceptors(session);
    // dispatchNavigation(navigateToAuthenticated)
  }
};

export const createAccountSuccess: ActionCreator<AuthActions> = () => ({
  type: actionTypes.CREATE_ACCOUNT_SUCCESS,
});

export const createAccountFailure: ActionCreator<AuthActions> = () => ({
  type: actionTypes.CREATE_ACCOUNT_FAILURE,
});

export const loginSuccess: ActionCreator<AuthActions> = () => ({
  type: actionTypes.LOGIN_SUCCESS,
});

export const loginFailure: ActionCreator<AuthActions> = () => ({
  type: actionTypes.LOGIN_FAILURE,
});

export const createAccount: ActionCreator<ThunkResult<
  AuthState,
  ExtraArguments,
  AuthActions
>> = (user: UserModel) => {
  return async (
    dispatch: ThunkDispatch<AuthActions, ExtraArguments, AuthActions>,
    _,
    {authController},
  ) => {
    try {
      if (!user) {
        console.warn('Without user');
        return;
      }
      const resultCreateAccount = await authController.createAccount(user);
      console.warn('Create account success', resultCreateAccount);
      dispatch(createAccountSuccess());
    } catch (error) {
      console.warn('error', error);
      dispatch(createAccountFailure());
    }
  };
};

export const login: ActionCreator<ThunkResult<
  AuthState,
  ExtraArguments,
  AuthActions
>> = (email?: string, password?: string) => {
  return async (
    dispatch: ThunkDispatch<AuthActions, ExtraArguments, AuthActions>,
    _,
    {authController},
  ) => {
    try {
      if (!email || !password) {
        console.warn('Without email or password');
        return;
      }
      const result = await authController.login(email, password);
      dispatch(loginSuccess());
      await setSession(result);
    } catch (error) {
      console.warn('error', error);
      dispatch(loginFailure());
    }
  };
};
