function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className=" w-full flex  space-x-6 mb-6">
      <button
        className={`flex  items-center  py-2 px-6 text-sm font-medium transition-all ${
          activeTab === "comments"
            ? "text-blue-600 border-b-4 border-blue-600"
            : "text-gray-600"
        }`}
        onClick={() => setActiveTab("comments")}
      >
        نظرات
      </button>
      <button
        className={`flex items-center py-2 px-6 text-sm font-medium transition-all ${
          activeTab === "addComment"
            ? "text-blue-600 border-b-4 border-blue-600"
            : "text-gray-600"
        }`}
        onClick={() => setActiveTab("addComment")}
      >
        نظر جدید
      </button>
      <button
        className={`flex items-center py-2 px-6 text-sm font-medium transition-all ${
          activeTab === "contact"
            ? "text-blue-600 border-b-4 border-blue-600"
            : "text-gray-600"
        }`}
        onClick={() => setActiveTab("contact")}
      >
        ارتباط با سازنده
      </button>
    </div>
  );
}

export default Tabs;
