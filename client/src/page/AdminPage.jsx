import Heading from "../ui/Heading";
import PerArticleChart from "../ui/PerArticleChart";

import Stats from "../ui/Stats";
function AdminPage() {
  return (
    <div className="w-full p-6 h-full overflow-auto flex flex-col gap-10">
      <Heading>داشبورد</Heading>
      <Stats />
      <PerArticleChart />
    </div>
  );
}

export default AdminPage;
