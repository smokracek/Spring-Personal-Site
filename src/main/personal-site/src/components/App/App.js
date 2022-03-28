import Intro from "../Intro/Intro";
import BlogHolder from "../BlogHolder/BlogHolder";

function App() {
  return (
    <div className="App" class="flex flex-row w-screen h-screen bg-themeBlack">
      <Intro></Intro>
      <BlogHolder></BlogHolder>
    </div>
  );
}

export default App;
