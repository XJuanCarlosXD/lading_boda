import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Countdown from "./Components/Countdown";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Countdown />
      <HashRouter>
        <Routes>
          <Route path="/:peop1/:peop2" element={<Home />}></Route>
          <Route path="*" element={<Navigate to="/1/2" />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
