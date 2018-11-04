import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  static readonly MONTO_MINIMO = 10;
  static readonly MONTO_MAXIMO = 5000;

  static readonly montoValidoRegExp = new RegExp(/^[0-9]+(\,[0-9]{0,2}){0,1}$/g);
  static soloLetrasEspacios = new RegExp(/^[a-zA-Z\s]*$/);
  /** si se desea aceptar la ñ y Ñ ocupar este pattern
   * static soloLetrasEspacios = new RegExp(/^[a-zA-Z\u00f1\u00d1\s]*$/);
   */
  static soloLetrasEspaciosNumeros = new RegExp(/^[a-zA-Z0-9\s]*$/);
  /** si se desea aceptar la ñ y Ñ ocupar este pattern
   * static soloLetrasEspaciosNumeros = new RegExp(/^[a-zA-Z0-9\u00f1\u00d1\s]*$/);
   */
  static soloLetrasNumeros = new RegExp(/^[a-zA-Z0-9]*$/);
/** si se desea aceptar la ñ y Ñ ocupar este pattern
   * static soloLetrasNumeros = new RegExp(/^[a-zA-Z0-9\u00f1\u00d1]*$/);
   */
  static readonly soloNumeros = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);

  constructor() { }
}