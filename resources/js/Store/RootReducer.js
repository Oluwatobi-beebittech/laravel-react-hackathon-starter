import { combineReducers } from '@reduxjs/toolkit';

import { MainReducer as Main } from './Main';

export const RootReducer = combineReducers({
    Main,
});