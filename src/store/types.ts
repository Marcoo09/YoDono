import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';

export interface ExtraArguments {}

export interface ReduxStore {
  entities: EntitiesType;
  actions: ActionsType;
}

export interface EntitiesType {}

export type EntitiesActions = void;

export interface ActionsType {}

export type ActionsActions = void;

export type ThunkResult<S, E, A extends Action> = ThunkAction<
  Promise<void>,
  S,
  E,
  A
>;
