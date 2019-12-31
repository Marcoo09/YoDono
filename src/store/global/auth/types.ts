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

export type AuthActions = CreateAccountSuccess | CreateAccountFailure;

export type ThunkResult<S, E, A extends Action> = ThunkAction<
  Promise<void>,
  S,
  E,
  A
>;
