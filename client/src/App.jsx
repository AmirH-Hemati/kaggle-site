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
import ProtectedUploaderRoute from "./ui/ProtectedUploaderRoute";
import Analyz from "./page/Analyz";
import ProtectedAnalyzeRoute from "./ui/ProtectedAnalyzeRoute";
import dataDatasets from "./data/sidebarDatasets";
import dataAnalyze from "./data/SidebarAnalyze";
import DatasetsAnalyze from "./feature/analyze/DatasetsAnalyze";
import Dataset from "./feature/dataset/Dataset";
import OverView from "./feature/analyze/OverView";
import StartCoddingInDataset from "./feature/analyze/StartCoddingInDataset";
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

            <Route element={<ProtectedUploaderRoute />}>
              <Route element={<LayoutUploader data={dataDatasets} />}>
                <Route path="/upload" element={<UploadFile />} />
                <Route path="/myUpload" element={<MyUpload />} />
                <Route path="/datasets" element={<Datasets />} />
                <Route path="/datasets/:id" element={<Dataset />} />
                <Route path="/json" element={<Json />} />
              </Route>
            </Route>
            <Route element={<ProtectedAnalyzeRoute />}>
              <Route element={<LayoutUploader data={dataAnalyze} />}>
                <Route path="/codeEditor" element={<Analyz />} />
                <Route
                  path="/codeEditor/:id"
                  element={<StartCoddingInDataset />}
                />
                <Route path="/datasetsAnalyze" element={<DatasetsAnalyze />} />
                <Route path="/datasetsAnalyze/:id" element={<Dataset />} />
                <Route path="/overView/:id" element={<OverView />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
