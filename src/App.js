import logo from "./logo.svg";
import BatchUpdating from "./features/batchUpdating";
import "./App.css";
import SuspenseFeature from "./features/suspense";
import Transitions from "./features/newHook/transitions";

function App() {
  return (
    <div className="App">
      <BatchUpdating />
      {/* <Transitions /> */}
      {/* <SuspenseFeature /> */}
    </div>
  );
}

export default App;
