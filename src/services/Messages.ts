import {Injectable} from "@angular/core";


@Injectable()
export class Menssages {

 
  
  constructor() {
  }
 

  public VALIDAR_FECHAS="Fecha desde, debe ser menor que la fecha hasta";
  public ERROR_GENERICO="Ocurrió un error";
  public VERIFICAR_PIN="Ingrese el pin de verificacón";
  public VERIFICAR_CONTRASENA="Debe realizar el cambio de contraseña";
  public STATUS_TOKEN=403;
  public STATUS_NOT_FOUND=404;
  public STATUS_NOT_DATA=409;
  public STATUS_VALIDATE=400; 


}
