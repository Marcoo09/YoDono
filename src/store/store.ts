import {applyMiddleware, compose, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import {ExtraArguments} from './types';
import rootReducer from './rootReducer';
import AsyncStorage from '@react-native-community/async-storage';

const composeEnhancers = composeWithDevTools({}) || compose;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer) as any;

const extraArgs: ExtraArguments = {};
const middleware = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument(extraArgs)),
);

const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

export {store, persistor};
