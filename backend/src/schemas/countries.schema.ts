import { z } from 'zod';

export const countriesSchema = {
  retrieveCountryBorders: z.object({
    code: z.string(),
  }),

  retrieveCountryFlag: z.object({
    iso2: z.string(),
  }),

  retrieveCountryHistoricalPopulation: z.object({
    name: z.string(),
  }),
};
