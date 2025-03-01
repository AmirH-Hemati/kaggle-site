import Button from "./Button";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function updateFilter(key, value) {
    const newparams = new URLSearchParams(searchParams);
    if (value && value !== "all") {
      newparams.set(key, value);
    } else {
      newparams.delete(key);
    }
    setSearchParams(newparams);
  }
  return (
    <aside className="h-full w-full md:w-1/5 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">فیلترها</h2>
      {/* فیلتر جایزه */}
      <div className="mb-4">
        <h3 className="font-medium text-gray-700 mb-2">جایزه (تومان)</h3>
        <div className="flex flex-col gap-2">
          <input
            type="number"
            placeholder="حداقل جایزه"
            onChange={(e) => updateFilter("minPrize", e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            placeholder="حداکثر جایزه"
            onChange={(e) => updateFilter("maxPrize", e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
      {/* فیلتر وضعیت زمان */}
      <div className="mb-4">
        <h3 className="font-medium text-gray-700 mb-2">وضعیت زمان</h3>
        <select
          onChange={(e) => updateFilter("deadline", e.target.value)}
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
        onClick={() => setSearchParams({})}
      >
        پاکسازی فیلترها
      </Button>
    </aside>
  );
}

export default Filter;
