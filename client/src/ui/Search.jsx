import { useSearchParams } from "react-router-dom";
import Input from "./Input";

function Search({ placeholder, filedSearch }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get(filedSearch) || "";
  function handelSearchChange(e) {
    const newSearch = e.target.value;
    const newParams = new URLSearchParams(searchParams);
    if (newSearch) {
      newParams.set(filedSearch, newSearch);
    } else {
      newParams.delete(filedSearch);
    }
    setSearchParams(newParams);
  }
  return (
    <Input
      type="text"
      name="search"
      placeholder={placeholder}
      value={search}
      onChange={handelSearchChange}
    />
  );
}

export default Search;
