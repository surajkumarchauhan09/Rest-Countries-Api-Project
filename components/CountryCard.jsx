const CountryCard = ({ name, population, flag, region, capital }) => {
  return (
    <a className="country-card" href={`/country.html?name=${name}`}>
      <img src={flag} alt="South Georgia flag" />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </a>
  );
};
export default CountryCard;