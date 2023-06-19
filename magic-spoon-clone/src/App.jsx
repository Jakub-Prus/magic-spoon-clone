import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex h-screen min-h-screen w-screen grow flex-col items-center justify-start overflow-x-hidden font-maven font-medium">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
