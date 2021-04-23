import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { store } from "./store";
import { Provider } from "react-redux";

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Application />, document.getElementById("root"));
