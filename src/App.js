// import logo from "./logo.svg";
// import BatchUpdating from "./features/batchUpdating";
import "./App.css";
// import SuspenseFeature from "./features/suspense";
import PersonOne from "./chat-components/personOne";
import PersonTwo from "./chat-components/personTwo";
// import TipsTricks from "./features/tips&tricks";
// import Transitions from "./features/newHook/transitions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SwitchUserPanel from "./chat-components/switch-user-panel";

function App() {
  return (
    <Router>
      <SwitchUserPanel/>
      <Routes>
        <Route path="/" element={<PersonOne />} />
        <Route path="first-person" element={<PersonOne />} />
        <Route path="second-person" element={<PersonTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
