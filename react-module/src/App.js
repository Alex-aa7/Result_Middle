import "./App.css";
import { Task3Hover } from "./tasks/task3-hover";
import InputForms from './components/InputForms/InputForms'

// import InputForms from "./components/InputForms/InputForms";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Задания Middle Frontend
      </header> 
      <main>
        <Task3Hover/>
        <InputForms />
      </main>
    </div>
  );
}

export default App;
