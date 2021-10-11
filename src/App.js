import "./App.css";
import Setup from "./tutorial/useState/setup/Calculator";
import Setup2 from "./tutorial/useReducer/setup";
import Setup3 from "./tutorial/prop-drilling/setup/prop-drilling";
import Setup4 from "./tutorial/usecontext/setup/context-api";
import Setup5 from "./tutorial/custom-hooks/setup/fetch-example";
import Setup6 from "./tutorial/react-router/setup";
import State from "./tutorial/useEffect/Setup/useEffect-fetch-data";
import Step from "./tutorial/conditional-rendering/Setup/show-hide";
import Step2 from "./tutorial/forms/setup/multiple-inputs";
function App() {
  return (
    <div className="container">
      <h2>Conditional rendering</h2>
      <Setup6 />
    </div>
  );
}

export default App;
