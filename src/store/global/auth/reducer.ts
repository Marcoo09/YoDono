import {get} from 'lodash';
import {Reducer} from 'redux';
import {AuthActions, AuthState} from './types';

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
    default:
      return state;
  }
};
