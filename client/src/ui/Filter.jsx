import { useSearchParams } from "react-router-dom";
import Button from "./Button";
import Heading from "./Heading";

function FilterSidebar({ filters }) {
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
    <aside className="h-full w-full md:w-1/3 bg-gary-50 p-6 rounded-lg shadow-md">
      <Heading>فیلترها</Heading>
      {filters?.map(({ key, label, type, options }) => (
        <div key={key} className="mb-4">
          <h3 className="font-medium text-gray-700 mb-2">{label}</h3>
          {type === "input" ? (
            <input
              type="text"
              placeholder={label}
              onChange={(e) => updateFilter(key, e.target.value)}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
            />
          ) : type === "select" ? (
            <select
              onChange={(e) => updateFilter(key, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="all">همه</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : null}
        </div>
      ))}
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

export default FilterSidebar;
