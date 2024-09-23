import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useContext, useState } from "react";
// import { useOutletContext } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
const Home = () => {
  // const a = useContext(ThemeContext)
  // console.log(a)
  const [isDark] = useContext(ThemeContext);
  const [query, setQuery] = useState(" ");
  // const [isDark] = useOutletContext()
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {query === "unmount" ? "" : <CountriesList query={query} />}
    </main>
  );
};
export default Home;
