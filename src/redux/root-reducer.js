import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] // User is reducer is persisted in firebase.
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: null
});

export default persistReducer(persistConfig, rootReducer);