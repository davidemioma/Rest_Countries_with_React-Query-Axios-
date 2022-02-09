import classes from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import InputForm from "../input/InputForm";
import RegionFilters from "../filters/RegionFilters";
import { Fragment } from "react";
import { useState } from "react";

function CountryList(props) {
  const [filterValue, setFilterValue] = useState("");

  const [inputValue, setInputValue] = useState("");

  const getFilterValue = (value) => {
    setFilterValue(value);
  };

  const getInputvalue = (value) => {
    setInputValue(value);
  };

  const filteredCountries = props.countries.filter((country) => {
    const countryNameLower = country.name.toLowerCase();
    const countryRegionLower = country.region.toLowerCase();
    const searchValueLower = inputValue.toLowerCase();
    const choosenRegionLower = filterValue.toLowerCase();

    if (
      countryNameLower.includes(searchValueLower) &&
      countryRegionLower.includes(choosenRegionLower)
    ) {
      return true;
    }
    return false;
  });

  return (
    <Fragment>
      <div className={classes.div}>
        <InputForm onEnteredInput={getInputvalue} />
        <RegionFilters onFiltervalue={getFilterValue} />
      </div>

      <ul className={classes.countries_list}>
        {filteredCountries.map((country) => (
          <CountryItem
            key={country.id}
            id={country.id}
            flagImg={country.flagImg}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </ul>
    </Fragment>
  );
}

export default CountryList;
