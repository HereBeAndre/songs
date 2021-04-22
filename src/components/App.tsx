import { useEffect } from "react";
import { songs } from "../data/songs";
import actions from "../store/actions";

const App = () => {
  useEffect(() => {
    actions.setSongList(songs);
  });
  return <div>App</div>;
};

export default App;