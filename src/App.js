import './App.css';
import Setup from './tutorial/useState/setup/Calculator';
import Setup2 from './tutorial/useReducer/setup';
import State from './tutorial/useEffect/Setup/useEffect-fetch-data';
import Step from './tutorial/conditional-rendering/Setup/show-hide';
import Step2 from './tutorial/forms/setup/multiple-inputs';
function App() {
  return (
    <div className="container">
      <h2>Conditional rendering</h2>
      <Setup2 />
    </div>
  );
}

export default App;
