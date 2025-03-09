import { useGetAllArticles } from "../feature/articles/useGetAllArticles";
import Articles from "../ui/Articles";
import FilterSidebar from "../ui/Filter";

function ArticlesPage() {
  const { articles } = useGetAllArticles();
  const articleFilters = [
    { key: "searchTitle", label: "عنوان مقاله", type: "input" },
    {
      key: "category",
      label: "دسته‌بندی",
      type: "select",
      options: [
        { key: "skills", label: "مهارت و سرگرمی" },
        { key: "programming", label: "برنامه‌نویسی" },
        { key: "security", label: "امنیت و شبکه" },
        { key: "art", label: "هنر و طراحی" },
        { key: "health", label: "سلامت و تناسب اندام" },
        { key: "research", label: "پژوهش و توسعه" },
      ],
    },
    {
      key: "date",
      label: "تاریخ انتشار",
      type: "date",
    },
  ];

  return (
    <div className="flex  w-full h-full ">
      <FilterSidebar filters={articleFilters} />
      <Articles articles={articles} />
    </div>
  );
}

export default ArticlesPage;
