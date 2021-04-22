import { combineReducers } from "redux";
import song, { types as songTypes } from "./song";

export default combineReducers({
  [songTypes.prefix]: song,
});
