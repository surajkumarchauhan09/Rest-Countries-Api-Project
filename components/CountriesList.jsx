import CountryCard from "./CountryCard";
import countriesData from "../countriesData";
const CountriesList = ({query}) => {
  return (
    <>
      <div className="countries-container">
        {countriesData.filter((country) =>
    country.name.common.toLowerCase().includes(query)
  ).map((country) => {
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
        })}
      </div>
    </>
  );
};
export default CountriesList;
