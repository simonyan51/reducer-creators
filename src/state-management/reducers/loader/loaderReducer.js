import actionTypes from "./../../constants/actionTypes";
import { combineReducers } from "redux";

const initalState = {
    isLoading: false
};

/**
 * Loader Reducer Factory
 */
const createLoaderReducer = 
    (initialState, actionHandlers) => 
    (state = initalState, action) => 
    actionHandlers[action.type] ? {...state, isLoading: actionHandlers[action.type]()} : state;


/**
 * Loader Reducer
 */
const loaderReducer = createLoaderReducer(initalState, {
    [ actionTypes.ENABLE_LOADER ]: (state, action) => true,
    [ actionTypes.DISABLE_LOADER ]: (state, action) => false,
    [ actionTypes.ADD_TODO ]: (state, action) => true,
    [ actionTypes.ADD_USER ]: (state, action) => true
});

export default loaderReducer;