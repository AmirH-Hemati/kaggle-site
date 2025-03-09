import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useGetReportArticlePerDay } from "../feature/admin/useGetReportArticlePerDay";
import Heading from "./Heading";
function PerArticleChart() {
  const { articles } = useGetReportArticlePerDay();
  const articleFilter = articles?.map((article) => ({
    date: new Date(article?._id).toLocaleDateString("fa-IR"),
    ["تعداد"]: article?.count,
  }));
  return (
    <div>
      <Heading> مقالات ثبت شده در هر روز</Heading>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={articleFilter}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="تعداد"
            stroke="black"
            fill="#155DFC"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerArticleChart;
