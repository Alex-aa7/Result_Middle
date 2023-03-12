import "./App.css";
import { Todo } from "./sandbox/todo";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Place for tasks
        <Todo listStrings={[1,2,3]}/>
      </header> 
    </div>
  );
}

export default App;
