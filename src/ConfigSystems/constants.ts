import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {    
  
 // public uriServer="https://201.220.133.207/";
  // public uriServer="http://201.220.133.207:81/";
  // public uriServer="http://201.220.133.218:8007/";
 // public uriServer="https://172.16.1.116:444/";
 // public uriServer = "https://192.168.0.11:45455/";
  public uriServer = "https://ecms-backend.conveyor.cloud/";
  public ServerLocal_Security = this.uriServer+'api/seguridad/' ;
  public serverLocalFlujo=this.uriServer+ "api/flujos/";
  public serverCambio=this.uriServer+"api/"
  public profesionales=this.uriServer+'api/riesgoprofesional/'
  public pagos=this.uriServer+'api/tesoreria/'

}
   
