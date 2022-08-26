import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import "./App.css";
import Test from "./Menus/TestMenu1";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Test />
      <BottomBar />
    </div>
  );
}

export default App;
