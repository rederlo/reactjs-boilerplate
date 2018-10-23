import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import { connectRouter, routerMiddleware } from "connected-react-router";

import storage from 'redux-persist/lib/storage';
import rootReducers from './reducers';

import history from '../routes/index';

const middleware = [
    logger,
    thunk,
    routerMiddleware(history)
];

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['router']
}

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(connectRouter(history)(persistedReducer), applyMiddleware(...middleware))
const persistor = persistStore(store)

export { store, persistor };