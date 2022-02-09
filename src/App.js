import Layout from "./components/Layouts/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Countries from "./pages/Countries";
import CountryDetail from "./pages/CountryDetail";
import { useState } from "react";

function App() {
  const [themeValue, setThemeValue] = useState("");

  const getThemeValue = (theme) => {
    setThemeValue(theme);
  };

  return (
    <div className={`background ${themeValue}`}>
      <Layout onThemeValue={getThemeValue} />

      <Routes>
        <Route path="/" element={<Navigate to="/countries" />} />

        <Route path="/countries" element={<Countries />} />

        <Route path="/countries/:countryId" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
