import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'
import storage from 'react-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] // User is reducer is persisted in firebase.
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);