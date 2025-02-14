import { useSearchParams } from "react-router-dom";
import Input from "./Input";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams() || "";
  function handelSearchChange(e) {
    const newSearch = e.target.value;
    const newParams = new URLSearchParams(searchParams);
    if (newSearch) {
      newParams.set("search", newSearch);
    } else {
      newParams.delete("search");
    }
    setSearchParams(newParams);
  }
  return (
    <Input
      type="text"
      placeholder="جستجو کنید ..."
      value={searchParams}
      onChange={handelSearchChange}
    />
  );
}

export default Search;
