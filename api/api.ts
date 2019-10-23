import { Application } from 'express';
import { getGeneralResponse } from './general/getGeneralResponse';
import { getCuadromedicofacetResponse } from './cuadromedicofacet/getCuadromedicofacetResponse';
import { getTomadorResponse } from './tomador/getTomadorResponse';
import { getPrimaResponse } from './prima/getPrimaResponse';
import { getDireccionPrestacionResponse } from './direccionprestacion/getDireccionPrestacionResponse';
import { getAseguradoResponse } from './asegurado/getAseguradoResponse';
import { getCopagoResponse } from './copago/getCopagoResponse';
import { getSuplementoResponse } from './suplemento/getSuplementoResponse';
import { getAutorizacionResponse } from './autorizacion/getAutorizacionResponse';
import { getFrontendLogResponse } from './frontend/getFrontendLogResponse';
import { getPruebaDiagnosticaAutorizableResponse } from './pruebadiagnosticaautorizable/getPruebaDiagnosticaAutorizableResponse';
import { getVolanteResponse } from './volante/getVolanteResponse';

export function initRestApi(app: Application) {
  app.route('/cuadromedicofacet/:resource').get(getCuadromedicofacetResponse);
  app.route('/tomador/:resource/:id').get(getTomadorResponse);
  app.route('/prima/:resource/:id').get(getPrimaResponse);
  app.route('/direccionprestacion/:resource/:id').get(getDireccionPrestacionResponse);
  app.route('/asegurado/:resource/:id').get(getAseguradoResponse);
  app.route('/copago/:resource/:id').get(getCopagoResponse);
  app.route('/suplemento/:resource/:id').get(getSuplementoResponse);
  app.route('/autorizacion/:resource/:id').get(getAutorizacionResponse);
  app.route('/frontend/:resource').get(getFrontendLogResponse);
  app.route('/pruebadiagnosticaautorizable/:resource').get(getPruebaDiagnosticaAutorizableResponse);
  app.route('/volante/:resource').get(getVolanteResponse);
  app.route('/:resource/:id').get(getGeneralResponse);
  app.route('/:resource').get(getGeneralResponse);
}
