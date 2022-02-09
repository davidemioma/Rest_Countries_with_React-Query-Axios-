import "./InputForm.css";
import searchIcon from "../../assets/images/search-icon-light-mode.svg";
import { useState } from "react";

function InputForm(props) {
  const [searchInput, setSearchInput] = useState("");

  const onChangeHandler = (e) => {
    setSearchInput(e.target.value);
    props.onEnteredInput(searchInput);
  };

  return (
    <div className="container form">
      <img src={searchIcon} alt="" />
      <input
        value={searchInput}
        onChange={onChangeHandler}
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default InputForm;
