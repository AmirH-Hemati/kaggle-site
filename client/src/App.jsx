import { Routes, Route } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./page/Home";
import LoginForm from "./feature/authorization/LoginForm";
import AuthLayout from "./ui/AuthLayout";
import SignIn from "./feature/authorization/SignIn";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LayoutUploader from "./ui/LayoutUploader";
import UploadFile from "./page/UploadFile";
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
import MyUpload from "./feature/dataset/MyUpload";
import Test from "./ui/Test";
import VerifyOtp from "./ui/VerifyOtp";
import AllDatasets from "./feature/dataset/AllDatasets";
import Profile from "./feature/authorization/Profile";
import AdminPage from "./page/AdminPage";
import AdminLayout from "./ui/AdminLayout";
import Users from "./feature/admin/Users";
import ProtectedRoutes from "./ui/ProtectedRoutes";
import CreateArticle from "./feature/admin/CreateArticle";
import ReportInActiveUsers from "./feature/admin/ReportInActiveUsers";
import ReportDailyArticles from "./feature/admin/ReportDailyArticles";
import ReportDailyArticle from "./feature/ReportDailyArticle";
import AllArticles from "./feature/admin/AllArticles";
import ArticlesPage from "./page/ArticlesPage";
import ArticleDetails from "./feature/articles/ArticleDetails";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Routes>
          <Route element={<ProtectedRoutes roles={["admin", "writer"]} />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="users" element={<Users />} />
              <Route path="createArticle" element={<CreateArticle />} />
              <Route path="articlesManagment" element={<AllArticles />} />
              <Route
                path="reportDailyArticles"
                element={<ReportDailyArticles />}
              />
              <Route
                path="reportDailyArticles/:id"
                element={<ReportDailyArticle />}
              />
              <Route
                path="reportInActiveUsers"
                element={<ReportInActiveUsers />}
              />
            </Route>
          </Route>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:id" element={<ArticleDetails />} />
            <Route
              path="/allDataset"
              element={<DatasetsAnalyze showFilter={true} />}
            />
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
