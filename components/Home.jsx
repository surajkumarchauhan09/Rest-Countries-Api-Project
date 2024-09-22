import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
const Home = () => {
    const [query, setQuery] = useState(" ");
    const [isDark] = useOutletContext()
  return (
    <main className={`${isDark?'dark':''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {query === "unmount" ? "" : <CountriesList query={query} />}
    </main>
  );
};
export default Home;
