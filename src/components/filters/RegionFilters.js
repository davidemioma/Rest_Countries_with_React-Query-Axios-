import "./RegionFilters.css";
import dropDown from "../../assets/images/drop-down-arrow-black.svg";
import { useState } from "react";

function RegionFilters(props) {
  const [showFilters, setShowFilters] = useState(false);

  const onToggleFilters = () => {
    setShowFilters((prevState) => {
      return !prevState;
    });
  };

  const dropDownHandler = (e) => {
    if (e.target.textContent !== "") {
      props.onFiltervalue(e.target.textContent);
    }
  };

  return (
    <div className="container filter">
      <span>
        <p>Filter by Region</p>
        <button onClick={onToggleFilters}>
          <img src={dropDown} alt="" />
        </button>
      </span>

      {showFilters && (
        <ul onClick={dropDownHandler}>
          <li>Africa</li>
          <li>Americas</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      )}
    </div>
  );
}

export default RegionFilters;
