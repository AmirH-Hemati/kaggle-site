import { useAuth } from "../context/AuthContext";
import Heading from "../ui/Heading";
import PerArticleChart from "../ui/PerArticleChart";

import Stats from "../ui/Stats";
function AdminPage() {
  const { role } = useAuth();
  if (role !== "admin") {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Heading>شمابه این صفحه  دسترسی ندارید</Heading>
      </div>
    );
  }
  return (
    <div className="w-full p-6 h-full overflow-auto flex flex-col gap-10">
      <Heading>داشبورد</Heading>
      <Stats />
      <PerArticleChart />
    </div>
  );
}

export default AdminPage;
