import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useContext, useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
const Home = () => {
  const [isDark] = useTheme()
  const [query, setQuery] = useState(" ");

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery}/>
      </div>
      <CountriesList query={query} />
    </main>
  );
};
export default Home;
