import Navbar from "./components/Navbar";
import Heroes from "./components/Heroes";
import Projects from './components/Projects'
import Commits from "./components/Commits";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Heroes/>
      <Projects/>
      <Commits/>
    </div>
  );
}

export default App;
