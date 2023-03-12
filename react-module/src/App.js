import "./App.css";
import { Todo, Todo2 } from "./sandbox/todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Place for tasks
        <Todo 
        title="new title" 
        listStrings={[1, 2, 3]}
        />
        <Todo2 
        title="new title 2" 
        listStrings={[5, 6, "rty"]}
        />
      </header>
    </div>
  );
}

export default App;
