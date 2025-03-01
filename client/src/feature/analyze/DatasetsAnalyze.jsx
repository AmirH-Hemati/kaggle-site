import { useState, useEffect } from "react";
import AllDatasets from "../dataset/DatasetList";
import { useDatasets } from "../dataset/useDatasets";
import Search from "../../ui/Search";
import Button from "../../ui/Button";

function DatasetsAnalyze() {
  const { datasets, loading } = useDatasets();
  const [filterPrizeMin, setFilterPrizeMin] = useState("");
  const [filterPrizeMax, setFilterPrizeMax] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  return (
    <div className="w-full h-full py-6 px-3 bg-gray-50">
      <div className="flex flex-col md:flex-row gap-6 ">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/5 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">فیلترها</h2>
          {/* فیلتر جایزه */}
          <div className="mb-4">
            <h3 className="font-medium text-gray-700 mb-2">جایزه (تومان)</h3>
            <div className="flex flex-col gap-2">
              <input
                type="number"
                placeholder="حداقل جایزه"
                value={filterPrizeMin}
                onChange={(e) => setFilterPrizeMin(e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="number"
                placeholder="حداکثر جایزه"
                value={filterPrizeMax}
                onChange={(e) => setFilterPrizeMax(e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          {/* فیلتر وضعیت زمان */}
          <div className="mb-4">
            <h3 className="font-medium text-gray-700 mb-2">وضعیت زمان</h3>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="all">همه</option>
              <option value="active">زمان باقی مانده</option>
              <option value="expired">زمان به پایان رسیده</option>
            </select>
          </div>
          {/* دکمه پاکسازی فیلترها (اختیاری) */}
          <Button
            type="primary"
            extraStyle="w-full py-2 text-sm"
            onClick={() => {
              setFilterPrizeMin("");
              setFilterPrizeMax("");
              setFilterStatus("all");
            }}
          >
            پاکسازی فیلترها
          </Button>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-4/5 flex flex-col gap-6">
          {/* Header with title, search bar, and sorting */}
          <div className="flex  flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-full md:w-1/2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                انتخاب مجموعه داده جهت تحلیل
              </h1>
              <p className="text-gray-600 mt-2">
                از بین مجموعه داده‌های متنوع، یکی را انتخاب کنید تا به تحلیل آن
                بپردازید.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-1/2">
              <Search />
            </div>
          </div>

          {/* Display datasets */}
          {loading ? (
            <p className="text-gray-600 text-center">در حال بارگذاری...</p>
          ) : datasets?.data?.length === 0 ? (
            <p className="text-gray-600 text-center">
              مجموعه داده‌ای یافت نشد.
            </p>
          ) : (
            <AllDatasets datasets={datasets?.data} />
          )}
        </main>
      </div>
    </div>
  );
}

export default DatasetsAnalyze;
