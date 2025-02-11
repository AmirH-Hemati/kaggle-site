import { Routes, Route } from "react-router-dom";
import Layout from "./ui/Layout";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}></Route>
    </Routes>
  );
}

export default App;
