import HighlightedCountry from "../components/countries/HighlightedCountry";
import { getCountryDetail } from "../lib/api";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { useQuery } from "react-query";

function CountryDetail() {
  const param = useParams();

  const id = param.countryId;

  const { isLoading, error, isError, data } = useQuery(["countries", id], () =>
    getCountryDetail(id)
  );

  if (isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <p className=" centered focused">Country information does not exist</p>
    );
  }
  if (isError) {
    return <p className=" centered focused">Country data does not exist</p>;
  }

  return (
    <HighlightedCountry
      flag={data.flag}
      name={data.name}
      nativeName={data.nativeName}
      population={data.population}
      region={data.region}
      subregion={data.subregion}
      capital={data.capital}
      topLevelDomain={data.topLevelDomain}
      lanaguages={data.languages}
      currencies={data.currencies}
      borders={data.borders}
    />
  );
}

export default CountryDetail;
