import {ActionCreator} from 'redux';
import {ThunkResult, ExtraArguments} from '../../types';
import {AuthActions, AuthState} from './types';
import {UserModel} from '../../../types/User/user';
import {ThunkDispatch} from 'redux-thunk';
import {actionTypes} from './actionTypes';

export const createAccountSuccess: ActionCreator<AuthActions> = () => ({
  type: actionTypes.CREATE_ACCOUNT_SUCCESS,
});

export const createAccountFailure: ActionCreator<AuthActions> = () => ({
  type: actionTypes.CREATE_ACCOUNT_FAILURE,
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
      console.warn('resultCreateAccount', resultCreateAccount);
      dispatch(createAccountSuccess());
    } catch (error) {
      console.warn('error', error);
      dispatch(createAccountFailure());
    }
  };
};
