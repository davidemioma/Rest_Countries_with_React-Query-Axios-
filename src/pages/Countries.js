import CountryList from "../components/countries/CountryList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getAllCountries } from "../lib/api";
import { useQuery } from "react-query";

function Countries() {
  const { isLoading, error, data } = useQuery("countries", getAllCountries);

  if (isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className=" centered focused">Unable to load countries</p>;
  }

  if (data && data.length === 0) {
    return <p className=" centered focused">Unable to find countries</p>;
  }

  return <CountryList countries={data} />;
}

export default Countries;
