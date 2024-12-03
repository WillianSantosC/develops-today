import axios from "axios";
import { configDotenv } from "dotenv";
configDotenv();

export class CountriesService {
  constructor() {}

  async retrieveCountries() {
    const countries = await axios
      .get(`${process.env.DATE_NAGER_URL}/AvailableCountries`)
      .then((response) => response.data)
      .catch((err) => {
        throw new Error(err.message);
      });

    return countries;
  }

  async retrieveCountryBorders(countryCode: string) {
    const countryBorders = await axios
      .get(`${process.env.DATE_NAGER_URL}/CountryInfo/${countryCode}`)
      .then((response) => response.data)
      .catch((err) => {
        throw new Error(err.message);
      });

    return countryBorders;
  }

  async retrieveCountryHistoricalPopulation(name: string) {
    const countryPopulationData = await axios
      .post(`${process.env.COUNTRIES_NOW_URL}/population`, {
        country: name,
      })
      .then((response) => response.data)
      .catch((err) => err.status);

    return countryPopulationData;
  }

  async retrieveCountryFlag(code: string) {
    const countriesFlags = await axios
      .post(`${process.env.COUNTRIES_NOW_URL}/flag/images`, {
        iso2: code,
      })
      .then((response) => response.data)
      .catch((err) => err.status);

    return countriesFlags;
  }
}
