import {Reducer} from 'redux';
import {AuthActions, AuthState} from './types';
import {actionTypes} from './actionTypes';

const initialState: AuthState = {
  error: undefined,
  loading: false,
  success: undefined,
};

export const AuthReducer: Reducer<AuthState, AuthActions> = (
  state = initialState,
  action: AuthActions,
) => {
  const {type} = action;
  switch (type) {
    case actionTypes.CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
      };
    case actionTypes.CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        success: false,
        error: 'An error occur when create account',
        loading: false,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        success: false,
        error: 'An error occur when login',
        loading: false,
      };
    default:
      return state;
  }
};
