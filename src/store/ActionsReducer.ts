import {combineReducers, Reducer, AnyAction} from 'redux';
import {AuthReducer} from './global/auth/reducer';
import {ActionsType} from './types';

export type ActionsState = Reducer<ActionsType, AnyAction>;

export default combineReducers<ActionsState>({
  auth: AuthReducer,
});
