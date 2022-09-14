import TopBar from './TopBar';
import BottomBar from "./BottomBar";
import ContextWindow from './ContextWindow';
import "./App.css";
// import Test from "./Menus/TestMenu1";
import logo from './logo.svg';
import Home from "./main/Home";

function App() {
  return (
    <div className="App">
      <TopBar />
      <ContextWindow />
      {/* <Test /> */}
      <BottomBar />
      <Home/>
    </div>
  );
}

export default App;
