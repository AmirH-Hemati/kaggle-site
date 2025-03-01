import { useState, useEffect } from "react";
import AllDatasets from "../dataset/DatasetList";
import { useDatasets } from "../dataset/useDatasets";
import Search from "../../ui/Search";

function DatasetsAnalyze() {
  const { datasets, loading } = useDatasets();

  return (
    <div className="w-full h-full p-6 bg-gray-50 flex flex-col gap-6">
      {/* Header with title and search bar */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          انتخاب مجموعه داده جهت تحلیل
        </h1>
        <div className="mt-4 md:mt-0 w-full md:w-1/3">
          <Search placeholder="جستجو در مجموعه داده‌ها..." />
        </div>
      </div>

      {/* Display datasets */}
      {loading ? (
        <p className="text-gray-600 text-center">در حال بارگذاری...</p>
      ) : datasets?.data?.length === 0 ? (
        <p className="text-gray-600 text-center">مجموعه داده‌ای یافت نشد.</p>
      ) : (
        <AllDatasets datasets={datasets?.data} />
      )}
    </div>
  );
}

export default DatasetsAnalyze;
