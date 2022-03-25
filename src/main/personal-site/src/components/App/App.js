import "./App.css";
import Intro from "../Intro/Intro";

function App() {
  return (
    <div className="App" class="flex flex-row w-screen h-screen bg-gray-400">
      <div
        className="Sidebar"
        class="bg-gray-200 w-1/5 h-screen justify-self-start"
      >
        <Intro></Intro>
      </div>
    </div>
  );
}

export default App;
