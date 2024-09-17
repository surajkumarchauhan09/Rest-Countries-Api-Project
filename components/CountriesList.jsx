import CountryCard from "./CountryCard";
import countriesData from "../countriesData";
const CountriesList = () => {
  const array = countriesData.map((country) => {
    return (
      <CountryCard
        key={country.name.common}
        name={country.name.common}
        population={country.population.toLocaleString("en-IN")}
        flag={country.flags.svg}
        region={country.region}
        capital={country.capital}
      />
    );
  });
  return <div className="countries-container">{array}</div>;
};
export default CountriesList;
