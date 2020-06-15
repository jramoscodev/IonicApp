import {Injectable} from "@angular/core";
import { FormGroup } from '@angular/forms';


@Injectable()
export class DataService {

  _form: FormGroup;
  _formLogin:FormGroup;
  _formPin: FormGroup;
  _formContrasena:FormGroup;

  //valores que se pasan de login a home
  _dataHome;


  //datos para login
  _dataLogin:any;
  _urlLogin="iniciosesion";

  //recuperar credenciales
  _uriRecuperacion="recuperacioncredenciales";
  _uriVerificarPin="verificarpinmovil?";
 
  //Expedientes filtras

  dataExpediente:any;
  dataExpedienteExt:any;
  
  message:any; 

  ReportExpediente=[]

  //recuperar credencilaes
  _dataRecuperarCrendenciales;
  _pasoRecuperar;


  //Flujos filtros
  _uriFlujo="filtroseguimientomovil?";

  //cambio contraseña
  _uriCambio="cambiocontraseniamovil"

  _uriFlujoEspecial="filtroseguimientomovilespecial?"


  //Detalle de la informacion de expediente

  dataDetailsExpe;


  //guardar archivo
  dataRegistrarExp={
  
  }

  //solicitud de pago
  solPago={}
  uriSolPago="insertarsolicitudarreglopago"; 

  //uri pago
  uriPagoTesoreria="insertarpagotesoreria";

  registrarEx="insertarregistroacta";
  
  aprobaraccion="aprobaracciones"
  //tipos de actas

  uriTipoActas="obtenerdetallecatalogo?idCatalogo=36";
  dataTipoActas=[]

  uriFormaPago="obtenerdetallecatalogo?idCatalogo=37";
  dataFormaPago=[]

  //registrar pago

  dataRegistrarPago={}
 
}
