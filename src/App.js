import TopBar from './TopBar';
import BottomBar from "./BottomBar";
import ContextWindow from './ContextWindow';
import "./App.css";
// import Test from "./Menus/TestMenu1";

function App() {
  return (
    <div className="App">
      <TopBar />
      <ContextWindow />
      {/* <Test /> */}
      <BottomBar />
    </div>
  );
}

export default App;
