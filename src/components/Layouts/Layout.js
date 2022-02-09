import NavBar from "./NavBar";

import { Fragment } from "react";

function Layout(props) {
  const getThemeValue = (theme) => {
    props.onThemeValue(theme);
  };

  return (
    <Fragment>
      <NavBar onTheme={getThemeValue} />
    </Fragment>
  );
}

export default Layout;
