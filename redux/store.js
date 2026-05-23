import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import AsyncStorage
from "@react-native-async-storage/async-storage";

import {
  persistStore,
  persistReducer
} from "redux-persist";

import usersReducer from "./reducers";


const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer =
  persistReducer(
    persistConfig,
    usersReducer
  );

export const store =
  createStore(
    persistedReducer,
    applyMiddleware(thunk)
  );

export const persistor =
  persistStore(store);