import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import Main from "./main/Home";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TopBar />
      <BottomBar />
    </div>
  );
}

export default App;
