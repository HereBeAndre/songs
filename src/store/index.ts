import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

import actions from "./song/actions";
import types from "./song/types";
// import { APP_EVENTS } from "./index_d";

const store = createStore(reducers, composeWithDevTools(applyMiddleware()));

// window.addEventListener(APP_EVENTS.LOGOUT, () => {
//   store.dispatch(actions.logout());
// });

export { store, actions, types };
