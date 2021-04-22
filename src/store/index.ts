import { createStore } from "redux";

import reducers from "./reducers";

import actions from "./actions";
import types from "./types";
// import { APP_EVENTS } from "./index_d";

const store = createStore(reducers);

// window.addEventListener(APP_EVENTS.LOGOUT, () => {
//   store.dispatch(actions.logout());
// });

export { store, actions, types };
