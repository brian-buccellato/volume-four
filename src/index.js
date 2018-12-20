import "./index.scss";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import * as serviceWorker from "./serviceWorker";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

import { rootReducer } from "./store/reducers/rootReducer";
import firebaseConfig from "./config/firebaseConfig";

const store = createStore(
  rootReducer,
  compose(
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig, {}),
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
