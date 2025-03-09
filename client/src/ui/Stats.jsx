import { Profile2User, ShoppingBag } from "iconsax-react";
import { useGetAllArticles } from "../feature/articles/useGetAllArticles";
import { useGetUsers } from "../feature/admin/useGetUsers";
import { useGetReportDailyArticles } from "../feature/admin/useGetReportDailyArticles";
import { useGetInActiveUsers } from "../feature/admin/useGetInActiveUsers";
import Stat from "./Stat";

function Stats() {
  const { articles } = useGetAllArticles();
  const { users } = useGetUsers();
  const { articles: articlesDaily } = useGetReportDailyArticles();
  const { users: usersInActive } = useGetInActiveUsers();
  const usersFilter = users?.filter((user) => user.role === "writer");
  return (
    <div className="grid grid-cols-4 gap-4 ">
      <Stat
        title={`مقالات`}
        value={articles?.length}
        icon={<ShoppingBag size="32" color="#192938" />}
        color={`#6258f5d3`}
      />
      <Stat
        title={`نویسندگان`}
        value={usersFilter?.length}
        icon={<Profile2User size="32" color="#192938" />}
        color={`#4aec83`}
      />
      <Stat
        title={`مقالات  امروز`}
        value={articlesDaily?.length}
        icon={<ShoppingBag size="32" color="#192938" />}
        color={`#94e400`}
      />
      <Stat
        title={`نویسندگان غیر فعال`}
        value={usersInActive?.length}
        icon={<ShoppingBag size="32" color="#192938" />}
        color={`#0d92f8`}
      />
    </div>
  );
}

export default Stats;
