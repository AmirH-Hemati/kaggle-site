import { useSearchParams } from "react-router-dom";
import Input from "./Input";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
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
      name="search"
      placeholder="جستجو کنید ..."
      value={search}
      onChange={handelSearchChange}
    />
  );
}

export default Search;
