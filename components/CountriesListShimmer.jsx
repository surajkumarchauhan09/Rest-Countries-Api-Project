import "./CountriesListShimmer.css";
const CountriesListShimmer = () => {
  // const array = new Array(10).fill(1) //This is not in use
  // console.log(array)

  return (
    <div className="countries-container">
      {Array.from({ length: 16 }).map((el, i) => {
        return <div key={i} className="country-card shimmer-card"></div>;
      })}
    </div>
  );
};
export default CountriesListShimmer;
