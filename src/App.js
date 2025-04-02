import './App.css';
import News from "./components/News";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">My Feed</h1>
        <News />
      </header>
    </div>
  );
}

export default App;
