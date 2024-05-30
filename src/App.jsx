import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Toaster } from "react-hot-toast";
import Admin from "./Pages/Admin";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/:peop1/:peop2/:tel" element={<Home />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="*" element={<Navigate to="/1/2/3" />} />
        </Routes>
      </HashRouter>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export default App;
