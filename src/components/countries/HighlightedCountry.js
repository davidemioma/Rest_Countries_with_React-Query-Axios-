import "./HighlightedCountry.css";
import { Link } from "react-router-dom";

function HighlightedCountry(props) {
  return (
    <div className="country">
      <Link to="/countries">
        <span>&#8592; </span>Back
      </Link>

      <div className="grid">
        <img src={props.flag} alt="" />

        <div className="country_details">
          <div>
            <h3>{props.name}</h3>

            <p>
              <span>Native Name: </span>
              {props.nativeName}
            </p>
            <p>
              <span>Population: </span>
              {props.population}
            </p>
            <p>
              <span>Region: </span>
              {props.region}
            </p>
            <p>
              <span>Sub region: </span>
              {props.subregion}
            </p>
            <p>
              <span>Capital: </span>
              {props.capital}
            </p>
          </div>

          <div>
            <p>
              <span>Top Level Domain: </span>
              {props.topLevelDomain.length > 0
                ? props.topLevelDomain.join(", ")
                : ""}
            </p>
            <p>
              <span>Lanaguages: </span>
              {props.lanaguages.length > 0 ? props.lanaguages.join(", ") : ""}
            </p>
            <p>
              <span>Currencies: </span>
              {props.currencies.length > 0 ? props.currencies.join(", ") : ""}
            </p>
          </div>
        </div>
      </div>

      <p>Borders:</p>
      <div className="borders">
        {props.borders.length > 0
          ? props.borders.map((border) => <span key={border}>{border}</span>)
          : ""}
      </div>
    </div>
  );
}

export default HighlightedCountry;
