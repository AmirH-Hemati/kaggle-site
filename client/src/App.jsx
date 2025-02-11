import { Routes, Route } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./page/Home";
import LoginForm from "./feature/authorization/LoginForm";
import AuthLayout from "./ui/AuthLayout";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
