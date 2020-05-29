import {
  Component,
  OnInit
} from "@angular/core";
import {
  NavController,
  LoadingController
} from "ionic-angular";
import {
  LoginPage
} from "../login/login";
import {
  HomePage
} from "../home/home";
import {
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import {
  DataService
} from '../../services/dataService'
import {
  ServiceGlobals
} from "../../services/ServiceGlobals";
import {
  ServiceAlert
} from '../../services/ServiceAlert'
import {
  Menssages
} from '../../services/Messages'


@Component({
  selector: 'page-register',
  templateUrl: 'RecuperarCredenciales.html',
  providers: [DataService, ServiceGlobals, ServiceAlert, Menssages]
})
export class RecuperarCredencialesPage implements OnInit {

  public type = 'password';
  public showPass = false;

  constructor(public nav: NavController, private dataService: DataService, private serviceGlobal: ServiceGlobals,
    private formBuilder: FormBuilder,
    public loadingController: LoadingController,
    private _serviceAlert: ServiceAlert,
    private _mensajes: Menssages) {
    this.dataService._pasoRecuperar = {

      numberStep: 1
    }

  }

  ngOnInit() {
    this.dataService._dataRecuperarCrendenciales = {
      NombreUsuario: "",
      CorreoElectronico: "",
      NumeroIdentificacion: "",
      pin: "",
     /* contrasena: "",
      contrasenaConfirmar: ""*/

    }



    this.dataService._form = this.formBuilder.group({
      NombreUsuario: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)
      ]),
      CorreoElectronico: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(200)
      ]),
      NumeroIdentificacion: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(13)
      ])
    });

    this.dataService._formPin = this.formBuilder.group({
      pin: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)
      ])
    })

   
  }
  // register and go to home page
  register() {
    this.nav.setRoot(HomePage);
  }

  RecuperarCredenciales(front) {


    this._serviceAlert.showLoading();


    let body = JSON.stringify({
      NombreUsuario: front.NombreUsuario,
      CorreoElectronico: front.CorreoElectronico,
      NumeroIdentificacion: front.NumeroIdentificacion
    });

    this.serviceGlobal.PostApiNotToken( this.dataService._uriRecuperacion,body, 1,1)
      .then(data => {

          if (data.Status == 200) {
            this.ControlPasos(1)
            this._serviceAlert.presentConfirm(this._mensajes.VERIFICAR_PIN);
            
          }else {
            ;
            this._serviceAlert.presentConfirm(data.Message)
          }
          this._serviceAlert.dismissLoading();
        },
        Error => {
          let dataVa = this.serviceGlobal.parseResponse(Error.error)

          if (dataVa.Status == this._mensajes.STATUS_NOT_FOUND || dataVa.Status == this._mensajes.STATUS_TOKEN || dataVa.Status == this._mensajes.STATUS_NOT_DATA) {
            this._serviceAlert.presentConfirm(dataVa.Message);
          } else {
            this._serviceAlert.presentConfirm(this._mensajes.ERROR_GENERICO);
          }
          this._serviceAlert.dismissLoading();
        });


  }


  VerificarPin(dataFront) {


    this._serviceAlert.showLoading();


    this.serviceGlobal.PostApiNotToken(this.dataService._uriVerificarPin + "pin=" + dataFront.pin+"&nombreUsuario="+dataFront.NombreUsuario,'',1,1)
      .then(data => {

          if (data.Status == 200) {
            this._serviceAlert.presentConfirm(data.Message);
            //this.ControlPasos(1)
            this.login();
          }  else {
            this._serviceAlert.presentConfirm(data.Message);
          }
          this._serviceAlert.dismissLoading();
        },
        Error => {
          let dataVa = this.serviceGlobal.parseResponse(Error.error)

          if (dataVa.Status == this._mensajes.STATUS_NOT_FOUND || dataVa.Status == this._mensajes.STATUS_TOKEN || dataVa.Status == this._mensajes.STATUS_NOT_DATA) {
            this._serviceAlert.presentConfirm(dataVa.Message);
          } else {
            this._serviceAlert.presentConfirm(this._mensajes.ERROR_GENERICO);
          }
          this._serviceAlert.dismissLoading();
        });


  }

  ControlPasos(paso) {
    
    if (paso == 1)
      this.dataService._pasoRecuperar.numberStep++
    else
      this.dataService._pasoRecuperar.numberStep--


  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }

  showPassword() {
    this.showPass = !this.showPass;
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
 }
}
