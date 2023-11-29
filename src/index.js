import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const pitchers = (state = [], action) => {
  if (action.type === "ADD_PITCHER") {
    const newPitcher = action.payload;

    return [...state, newPitcher];
  }

  return state;
};
const catchers = (state = [], action) => {
    if (action.type === "ADD_CATCHER") {
      const newCatcher = action.payload;
  
      return [...state, newCatcher];
    }
  
    return state;
  };

const playerStore = createStore(
  combineReducers({
    pitchers,
    catchers
  })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={playerStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
