import "./CountriesListShimmer.css";
const CountriesListShimmer = () => {

  return (
    <div className="countries-container">
      {Array.from({ length: 16 }).map((el, i) => {
        return <div key={i} className="country-card shimmer-card"></div>;
      })}
    </div>
  );
};
export default CountriesListShimmer;
