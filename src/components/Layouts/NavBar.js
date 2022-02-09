import classes from "./NavBar.module.css";
import darkToggler from "../../assets/images/toggle-darkmode-icon.svg";
import lightToggler from "../../assets/images/toggle-lightmode-icon.svg";
import { useState } from "react";

function NavBar(props) {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    props.onTheme(theme);
  };

  return (
    <header className={classes.header}>
      <nav className="container">
        <h3>Where in the world?</h3>

        <span>
          <img
            onClick={changeTheme}
            src={theme === "light" ? darkToggler : lightToggler}
            alt=""
          />
          <p>{theme === "light" ? "Dark Mode" : "Light Mode"}</p>
        </span>
      </nav>
    </header>
  );
}

export default NavBar;
