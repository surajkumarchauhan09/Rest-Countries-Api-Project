import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
// import countriesData from "../countriesData";
const CountriesList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {//it is use for if you want to run a code a code when only one time
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });

    const intervalId = setInterval(() => {
      console.log("running countriesList component");
    }, [1000]);

    console.log(intervalId);

    return () => {  //it is called cleanup function it run when your component unmount matlab component hat raha ho tab run hoga
      clearInterval(intervalId);//it is the second use of useEffect
    };
  }, []);

  useEffect(() => { //it is also use for track the state of variable 
    console.log("hiii");
  }, [count]);

  return (
    <>
      <button
        onClick={() => {
          setCountriesData([]);
        }}
      >
        Reset Country Data
      </button>
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
