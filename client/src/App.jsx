import { Routes, Route } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./page/Home";
import LoginForm from "./feature/authorization/LoginForm";
import AuthLayout from "./ui/AuthLayout";
import SignIn from "./feature/authorization/SignIn";
import SignInUploader from "./feature/authorization/SignInUploader";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signIn" element={<SignIn />} />

          <Route path="signInUploader" element={<SignInUploader />} />
          <Route path="signInAnalyze" element={<SignInUploader />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
