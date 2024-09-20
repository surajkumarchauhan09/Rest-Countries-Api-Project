import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
// import countriesData from "../countriesData";
const CountriesList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  return (
    <>
      <div className="countries-container">
        {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query)
          )
          .map((country) => {
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
