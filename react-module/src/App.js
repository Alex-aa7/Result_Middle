import "./App.css";
import { Todo } from "./sandbox/todo";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Place for tasks
        <Todo/>
      </header> 
    </div>
  );
}

export default App;
