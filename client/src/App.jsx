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
import SubmitModel from "./feature/analyze/SubmitModel";
import MySubmissionPage from "./page/MySubmissionPage";
import MyUploads from "./feature/dataset/MyUploads";
import MyUpload from "./feature/dataset/MyUpload";
import Test from "./ui/Test";
import VerifyOtp from "./ui/VerifyOtp";
import AllDatasets from "./feature/dataset/AllDatasets";
import Profile from "./feature/authorization/Profile";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/allDataset" element={<DatasetsAnalyze />} />
            <Route path="/profile" element={<Profile />} />

            <Route element={<AuthLayout />}>
              <Route path="/test2" element={<Test />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/verifyOtp" element={<VerifyOtp />} />
            </Route>

            <Route element={<ProtectedUploaderRoute />}>
              <Route element={<LayoutUploader data={dataDatasets} />}>
                <Route path="/upload" element={<UploadFile />} />
                <Route path="/myUploads" element={<AllDatasets />} />
                <Route path="/myUploads/:id" element={<MyUpload />} />
                <Route path="/datasets" element={<Datasets />} />
                <Route path="/datasets/:id" element={<Dataset />} />
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
                <Route path="/submitModel/:id" element={<SubmitModel />} />
                <Route path="/mySubmission" element={<MySubmissionPage />} />
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
