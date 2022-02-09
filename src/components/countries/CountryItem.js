import "./CountryItem.css";
import { Link } from "react-router-dom";

function CountryItem(props) {
  return (
    <li className="item">
      <Link to={`/countries/${props.id}`}>
        <div>
          <img src={props.flagImg} alt="" />
          <div className="details">
            <h3>{props.name}</h3>
            <p>
              <span>Population: </span>
              {props.population}
            </p>
            <p>
              <span>Region: </span>
              {props.region}
            </p>
            <p>
              <span>Capital: </span>
              {props.capital}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default CountryItem;
