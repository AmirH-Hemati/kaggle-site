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
        پرسش و پاسخ
      </button>
      <button
        className={`flex items-center py-2 px-6 text-sm font-medium transition-all ${
          activeTab === "addComment"
            ? "text-blue-600 border-b-4 border-blue-600"
            : "text-gray-600"
        }`}
        onClick={() => setActiveTab("addComment")}
      >
        پرسش{" "}
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
      <button
        className={`flex items-center py-2 px-6 text-sm font-medium transition-all ${
          activeTab === "submissionModel"
            ? "text-blue-600 border-b-4 border-blue-600"
            : "text-gray-600"
        }`}
        onClick={() => setActiveTab("submissionModel")}
      >
        مدل ارسالی شما{" "}
      </button>
    </div>
  );
}

export default Tabs;
