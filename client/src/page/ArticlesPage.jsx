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
        { value: "technology", label: "تکنولوژی" },
        { value: "science", label: "علمی" },
        { value: "business", label: "کسب‌وکار" },
        { value: "health", label: "سلامت" },
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
