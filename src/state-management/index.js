import { combineReducers, applyMiddleware } from "redux";
import loaderReducer from "./reducers/loader/loaderReducer";
import { createStore } from "redux";

import { createLogger } from 'redux-logger';
import createAsyncReducer from "../core/helpers/createAsyncReducer";
import actionTypes from "./constants/actionTypes";

import userReducer from './reducers/user';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    loader: loaderReducer,
    users: createAsyncReducer(actionTypes.USERS),
    todos: createAsyncReducer(actionTypes.TODO),
    posts: createAsyncReducer(actionTypes.POSTS, []),
    usersSync: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, createLogger() ));

export default store;