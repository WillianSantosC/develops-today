import { NextFunction, Request, Response } from "express";
import { CountriesService } from "../services/countries.service";

export class CountriesController {
  constructor(private countriesService = new CountriesService()) {}

  retrieveCountries = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const countries = await this.countriesService.retrieveCountries();

      res.status(200).json(countries);
    } catch (error) {
      next(error);
    }
  };

  retrieveCountryBorders = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { code } = req.params;
      const country = await this.countriesService.retrieveCountryBorders(code);

      res.status(200).json(country);
    } catch (error) {
      next(error);
    }
  };

  retrieveCountryFlag = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { iso2 } = req.params;
      const countryFlag = await this.countriesService.retrieveCountryFlag(iso2);

      if (countryFlag === 404) {
        return res.status(404).json({ message: "Country not found" });
      }

      res.status(200).json(countryFlag);
    } catch (error) {
      next(error);
    }
  };

  retrieveCountryHistoricalPopulation = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { name } = req.params;
      const countryHistoricalPopulation =
        await this.countriesService.retrieveCountryHistoricalPopulation(name);

      if (countryHistoricalPopulation === 404) {
        return res.status(404).json({ message: "Country not found" });
      }

      res.status(200).json(countryHistoricalPopulation);
    } catch (error) {
      next(error);
    }
  };
}

export default CountriesController;
