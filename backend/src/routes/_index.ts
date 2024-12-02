import { Router } from 'express';
import * as CountriesRoutes from './countries.routes';

export function initRoutes(app: Router) {
  CountriesRoutes.routes(app);
}
