import { AddSquare, Chart, Chart2, Data, UserSearch } from "iconsax-react";

const data = [
  {
    title: "داشبورد",
    route: "/admin",
    icon: <Chart size="34" color="white" variant="Bold" />,
  },
  {
    title: "گزارش",
    icon: <Chart2 size="32" color="white" variant="Bold" />,
    submenu: [
      {
        title: "گزارش مقالات روزانه",
        route: "/reportDailyArticles",
        icon: <Data size="26" color="white" />,
      },
      {
        title: "نویسندگان غیر فعال",
        route: "/reportInActiveUsers",
        icon: <Data size="26" color="white" />,
      },
    ],
  },
  {
    title: "کاربران",
    route: "/users",
    icon: <UserSearch size="34" color="white" variant="Bold" />,
  },
  {
    title: "مقالات",
    route: "/articlesManagment",
    icon: <Data size="34" color="white" variant="Bold" />,
  },
  {
    title: "اضافه کردن مقاله",
    route: "/createArticle",
    icon: <AddSquare size="34" color="white" variant="Bold" />,
  },
];

export default data;
