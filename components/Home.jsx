import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useContext, useEffect, useState } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";
import { useTheme } from "../hooks/useTheme";
// import { useWindowSize } from "../hooks/useWindowSize";
const Home = () => {
  // const [isDark] = useContext(ThemeContext);
  const [isDark] = useTheme()
  const [query, setQuery] = useState(" ");
  // const windowSize = useWindowSize();
  // const [windowSize, setWindowSize] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  //   });
  // }, []);

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {/* <h1 style={{ textAlign: "center" }}>
        {windowSize.width} x {windowSize.height}
      </h1> */}
      <CountriesList query={query} />
    </main>
  );
};
export default Home;
