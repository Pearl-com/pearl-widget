import "./App.css";
import { PearlWidget } from "@pearl.com/pearl-widget-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pearl Chat Widget Example</h1>
      </header>
      <div className="App-widget">
        <PearlWidget accessKey="your-access-key" mode="pearl-ai"/>
      </div>
    </div>
  );
}

export default App;
