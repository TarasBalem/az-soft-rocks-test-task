import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import "./assets/styles/styles.scss";
import App from "./App";
import configureStore from "./store/configureStore";

const store = configureStore();

// перевірка localStorage на наявність контактів
store.subscribe(() => {
  localStorage.setItem(
    "stateContacts",
    JSON.stringify(store.getState().contacts),
  );
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
