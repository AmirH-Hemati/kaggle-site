import { Routes, Route } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./page/Home";
import LoginForm from "./feature/authorization/LoginForm";
import AuthLayout from "./ui/AuthLayout";
import SignIn from "./feature/authorization/SignIn";
import SignInUploader from "./feature/authorization/SignInUploader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LayoutUploader from "./ui/LayoutUploader";
import UploadFile from "./page/UploadFile";
import MyUpload from "./feature/dataset/MyUpload";
import Json from "./page/Json";
import Datasets from "./feature/dataset/Datasets";
import { AuthContextProvider } from "./context/AuthContext";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/test" element={<SignInUploader />} />
            </Route>
            <Route element={<LayoutUploader />}>
              <Route path="/upload" element={<UploadFile />} />
              <Route path="/myUpload" element={<MyUpload />} />
              <Route path="/datasets" element={<Datasets />} />
              <Route path="/json" element={<Json />} />
            </Route>
          </Route>
        </Routes>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
