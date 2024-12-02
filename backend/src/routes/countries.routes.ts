import { Router } from 'express';
import { countriesController } from '../controllers/_index';
import { countriesSchema } from '../schemas/countries.schema';
import wrapValidation from '../middlewares/validateRoutes';

export function routes(app: Router) {
  app.get('/countries', countriesController.retrieveCountries, () => {
    // #swagger.tags = ["Countries"]
    /* #swagger.responses[200] = {
            description: 'Retrieve Countries"',
            schema: [
                      {
                          "countryCode": "AD",
                          "name": "Andorra"
                      },
                      {
                          "countryCode": "AL",
                          "name": "Albania"
                      }
                    ]
        } */
  });

  app.get(
    '/country/:name',
    wrapValidation(
      countriesController.retrieveCountryHistoricalPopulation,
      countriesSchema.retrieveCountryHistoricalPopulation
    ),
    () => {
      // #swagger.tags = ["Countries"]
      /* #swagger.responses[200] = {
            description: 'Retrieve Country Historical Population',
            schema: {
                      error: false,
                      msg: "Nigeria with population",
                      data: {
                        country: "Nigeria",
                        code: "NGA",
                        iso3: "NGA",
                        populationCounts: [
                          {
                            year: 1960,
                            value: 45138458
                          },
                          {
                            year: 1961,
                            value: 46063563
                          }
                        ]
                      }
                    }
        } */
    }
  );

  app.get(
    '/country/:iso2/flag',
    wrapValidation(
      countriesController.retrieveCountryFlag,
      countriesSchema.retrieveCountryFlag
    ),
    () => {
      // #swagger.tags = ["Countries"]
      /* #swagger.responses[200] = {
            description: 'Retrieve Country Flag',
            schema: {
                      error: false,
                      msg: "Ukraine and flag retrieved",
                      data: {
                          name: "Ukraine",
                          flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
                          iso2: "UA",
                          iso3: "UKR"
                      }
                  }
        } */
    }
  );

  app.post(
    '/country/:code',
    wrapValidation(
      countriesController.retrieveCountryBorders,
      countriesSchema.retrieveCountryBorders
    ),
    () => {
      // #swagger.tags = ["Countries"]
      /* #swagger.responses[200] = {
            description: 'Retrieve Countries Borders',
            schema: {
                      commonName: "Ukraine",
                      officialName: "Ukraine",
                      countryCode: "UA",
                      region: "Europe",
                      borders: [
                          {
                          commonName: "Belarus",
                          officialName: "Republic of Belarus",
                          countryCode: "BY",
                          name: "Belarus",
                          region: "Europe"
                          }
                      ]
                     
                    }
        } */
    }
  );
}
