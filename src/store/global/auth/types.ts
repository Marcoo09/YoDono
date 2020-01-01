import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {actionTypes} from './actionTypes';

export interface AuthState {
  loading: boolean;
  error?: string;
  success?: boolean;
}

export interface CreateAccountSuccess extends Action {
  type: actionTypes.CREATE_ACCOUNT_SUCCESS;
}

export interface CreateAccountFailure extends Action {
  type: actionTypes.CREATE_ACCOUNT_FAILURE;
}

export interface LoginSuccess extends Action {
  type: actionTypes.LOGIN_SUCCESS;
}

export interface LoginFailure extends Action {
  type: actionTypes.LOGIN_FAILURE;
}

export type AuthActions =
  | CreateAccountSuccess
  | CreateAccountFailure
  | LoginSuccess
  | LoginFailure;
