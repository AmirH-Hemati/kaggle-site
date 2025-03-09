import { Data, DocumentUpload } from "iconsax-react";

const data = [
  {
    title: "داشبورد",
    route: "/admin",
    icon: <DocumentUpload size="26" color="black" />,
  },
  {
    title: "کاربران",
    route: "/users",
    icon: <Data size="26" color="black" />,
  },
  {
    title: "مقالات",
    route: "/articlesManagment",
    icon: <Data size="26" color="black" />,
  },
  {
    title: "اضافه کردن مقاله",
    route: "/createArticle",
    icon: <Data size="26" color="black" />,
  },
  {
    title: "گزارش مقالات روزانه",
    route: "/reportDailyArticles",
    icon: <Data size="26" color="black" />,
  },
  {
    title: "نویسندگان غیر فعال",
    route: "/reportInActiveUsers",
    icon: <Data size="26" color="black" />,
  },
];

export default data;
