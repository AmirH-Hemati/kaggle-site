import AllDatasets from "../dataset/DatasetList";
import { useDatasets } from "../dataset/useDatasets";
import Search from "../../ui/Search";
import Filter from "../../ui/Filter";

function DatasetsAnalyze({ showFilter = false }) {
  const { datasets, loading } = useDatasets();

  return (
    <div className="w-full h-full py-6 px-3 bg-gray-50">
      <div className="flex h-full flex-col md:flex-row gap-6 ">
        {showFilter && <Filter />}
        <main
          className={`w-full ${
            showFilter ? "md:w-4/5" : "w-full"
          } flex flex-col gap-6 `}
        >
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
