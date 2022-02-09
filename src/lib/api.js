const API_DOMAIN = "https://restcountries.com/v2";

const axios = require("axios").default;

export async function getAllCountries() {
  const res = await axios.get(`${API_DOMAIN}/all`);

  const results = res.data.map((country) => {
    return {
      id: country.name,
      name: country.name,
      flagImg: country.flag,
      population: country.population,
      region: country.region,
      capital: country.capital,
    };
  });

  return results;
}

export async function getCountryDetail(name) {
  const res = await axios.get(`${API_DOMAIN}/name/${name}`);

  const data = res.data[0];

  const result = {
    flag: data.flag,
    name: data.name,
    nativeName: data.nativeName,
    population: data.population,
    region: data.region,
    subregion: data.subregion,
    capital: data.capital,
    topLevelDomain: data.topLevelDomain.map((e) => e),
    languages: data.languages.map((language) => language.name),
    currencies: data.currencies.map((currency) => currency.code),
    borders: data.borders.map((border) => border),
  };

  return result;
}
