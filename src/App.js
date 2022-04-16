import "./App.css";
import Home from "./components/home/Home";
import { Nav } from "./components/nav/Nav";

function App() {
  return (
      <div className="App">
        <Nav />
        <Home />
      </div>
  );
}

export default App;
