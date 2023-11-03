import { Route, Routes } from "react-router-dom";
import MyScripts from "./Components/MyScripts";
import ScriptStories from "./Components/ScriptStories";

function App() {
  return (
    <div className="" >
      <Routes>
            <Route path="/" element={<ScriptStories />}></Route>
            <Route path="/myScripts" element={<MyScripts />}></Route>
          </Routes>
    </div>
  );
}

export default App;
