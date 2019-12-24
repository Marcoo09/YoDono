import {AnyAction, combineReducers, Reducer} from 'redux';
import actionsReducer from './ActionsReducer';

export type AppState = Reducer<any, AnyAction>;

const AppReducer = combineReducers<AppState>({
  actions: actionsReducer,
  // entities: undefined,
});

export default (state: any, action: AnyAction) => {
  return AppReducer(state, action);
};
