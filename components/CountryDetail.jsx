import { useEffect, useState } from "react";
import "./CountryDetail.css";
import { Link, useParams } from "react-router-dom";

const CountryDetail = () => {
  const params = useParams();
  const countryName = params.country;

  console.log(countryName);

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population,
          region: data.region,
          subRegion: data.subregion,
          capital: data.capital.join(","),
          flag: data.flags.svg,
          tld: data.tld,
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", "),
          languages: Object.values(data.languages).join(", "),
          borders: [],
        });
        if(!data.borders){
          data.borders=[]
        }
        Promise.all(data.borders.map((border) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then(([borderCountry]) => {
              return borderCountry.name.common
            });
        })).then((borders)=>{
          setCountryData((prevState)=>({...prevState,borders}))
        })
      //   data.borders.map((border) => {
      //     fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      //       .then((res) => res.json())
      //       .then(([borderCountry]) => {
      //         setCountryData((prevState)=>({...prevState,borders:[...prevState.borders,borderCountry.name.common]}));
      //       });
      //   });
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <div>Country Not Found</div>;
  }

  return countryData === null ? (
    "Loading..."
  ) : (
    <main>
      <div className="country-details-container">
        <span
          className="back-button"
          onClick={() => {
            history.back();
          }}
        >
          <i className="fa-solid fa-arrow-left" />
          &nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName} </b>
                <span className="native-name" />
              </p>
              <p>
                <b>
                  Population: {countryData.population.toLocaleString("en-IN")}{" "}
                </b>
                <span className="population" />
              </p>
              <p>
                <b>Region: {countryData.region} </b>
                <span className="region" />
              </p>
              <p>
                <b>Sub Region: {countryData.subRegion} </b>
                <span className="sub-region" />
              </p>
              <p>
                <b>Capital: {countryData.capital}</b>
                <span className="capital" />
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld} </b>
                <span className="top-level-domain" />
              </p>
              <p>
                <b>Currencies: {countryData.currencies} </b>
                <span className="currencies" />
              </p>
              <p>
                <b>Languages: {countryData.languages} </b>
                <span className="languages" />
              </p>
            </div>
            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
export default CountryDetail;
