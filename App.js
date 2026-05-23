import React from "react";

import {
  Provider
} from "react-redux";

import {
  PersistGate
} from "redux-persist/integration/react";

import {
  ActivityIndicator
} from "react-native";

import {
  store,
  persistor
} from "./redux/store";

import UserListContainer
from "./containers/UserListContainer";

export default function App() {

  return (

    <Provider store={store}>

      <PersistGate
        loading={
          <ActivityIndicator size="large" />
        }
        persistor={persistor}
      >

        <UserListContainer />

      </PersistGate>

    </Provider>
  );
}