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

  const data = res.data;

  const result = {
    flag: data[0].flag,
    name: data[0].name,
    nativeName: data[0].nativeName,
    population: data[0].population,
    region: data[0].region,
    subregion: data[0].subregion,
    capital: data[0].capital,
    topLevelDomain: data[0].topLevelDomain.map((e) => e),
    languages: data[0].languages.map((language) => language.name),
    currencies: data[0].currencies.map((currency) => currency.code),
    borders: data[0].borders.map((border) => border),
  };

  return result;
}
