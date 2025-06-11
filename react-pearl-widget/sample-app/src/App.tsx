import "./App.css";
import { PearlWidget } from "pearl-react-widget";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pearl Chat Widget Example</h1>
      </header>
      <div className="App-widget">
        <PearlWidget apiKey="your-access-key" mode="pearl-ai"/>
      </div>
    </div>
  );
}

export default App;
