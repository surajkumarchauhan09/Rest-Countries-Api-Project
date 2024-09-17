import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import CountriesList from "./components/CountriesList";
import "./App.css";
const App = () => {
  return (
    <>
      <Header />
      <div className="search-filter-container">
        <SearchBar/>
        <SelectMenu/>
      </div>
      <CountriesList/>
    </>
  );
};
export default App;
