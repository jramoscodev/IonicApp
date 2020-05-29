import {
  Component,
  OnInit,
  Input
} from "@angular/core";
import {
  NavController,
  //AlertController,
  ToastController,
  MenuController,
  LoadingController,
  Events,
  ModalController
} from "ionic-angular";
import {
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import {Menssages} from '../../services/Messages'


import {
  DataService
} from '../../services/dataService'
import {
  ServiceGlobals
} from "../../services/ServiceGlobals";
import {
  HomePage
} from "../home/home";
import {
  RecuperarCredencialesPage
} from "../RecuperarCredenciales/RecuperarCredenciales";
import {
  ServiceAlert
} from '../../services/ServiceAlert'
import {
  Storage
} from '@ionic/storage';


/*import {
  ModalRegistrarComponent
} from '../modal-registrar/modal-registrar'*/
import { AuthenticationService } from "../../services/AuthenticationService";
import { LoginResult } from "../../Models/LoginResult";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [DataService, ServiceGlobals, ServiceAlert, Menssages, AuthenticationService]
})
export class LoginPage implements OnInit {

  public type = 'password';
  public showPass = false;

  @Input() step: string = 'Hola';

  constructor(public nav: NavController,
    // public forgotCtrl: AlertController,
    public menu: MenuController,
    public toastCtrl: ToastController,
    private dataService: DataService,
    private serviceGlobal: ServiceGlobals,
    private formBuilder: FormBuilder,
    public loadingController: LoadingController,
    private _serviceAlert: ServiceAlert,
    private storage: Storage,
    private _messsage:Menssages,
    private events:Events,
    public myModal: ModalController,
    private auth : AuthenticationService
  ) {
    this.menu.swipeEnable(false);

    /*this.dataService.dataRegistrarExp = {
      IdRegistroActa: 0,
      IdAccionSeguimientoFlujo: "325",
      NroExpedienteIntegral: "STSS-26122019000004",
      NroExpedienteInterno: "DGIT-0101012612201900157",
      Tipo: 178,
      FechaActa: "2020-01-24T16:33:20.073Z",
      Detalle: "",
      PlantillaHtml: "",
      RutaArchivo: "C:\\Users\\Win10\\Downloads\\itil.pdf",
      TieneInfraccion: 208,
      TieneArregloPago: 0,
      FechaUltimaMod: null,
      IdUsuarioMod: 0,
      Estado: 10,
      numeroExpedienteIntegral: "",
      numeroExpedienteInterno: "",
      nombreEmpresa: "",
      fechaDesde: "",
      fechaHasta: ""
    }*/
  }

  ionViewCanEnter() {
    if(this.auth.IsAuthenticated())
    {

      let typo = parseInt(localStorage.getItem('typouser'));
      typo == 0 ? this.events.publish('user:0') : this.events.publish('user:1')
      
      this.nav.setRoot(HomePage);
    }

  }
  
  /*showModal(datafront) {
    var dataMo = {
      datapass: datafront
    };

    var modal = this.myModal.create(ModalRegistrarComponent, dataMo);
    modal.present();

  }*/

  ngOnInit() {


    this.storage.get('user').then((value) => {


      if (value != null && value != '' && typeof (value) != undefined) {


        this.nav.setRoot(HomePage, {
          token: "",
          Usuario: "",
          Contrasena: ""

        });

      
      }

    });


    this.dataService._dataLogin = {
      Usuario: "",
      Contrasena: "",
      guardarContrasena: false
    }

    this.dataService._formLogin = this.formBuilder.group({
      Usuario: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30)
      ]),
      Contrasena: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30)
      ]),
      guardarContrasena: new FormControl(null, null)
    });

    this.serviceGlobal.validationCharacterNumerick()
  }
  // ir a pagina de registro
  recuperarCredenciales() {
    this.nav.setRoot(RecuperarCredencialesPage);
  }


  async login(front) {

    this._serviceAlert.showLoading();

    let body = JSON.stringify({
      Usuario: front.Usuario,
      Contrasena: front.Contrasena
    });
    console.log(body);

    let result = await this.auth.logIn(body) as LoginResult;
    console.log(result);
    if(result.error !=undefined){
      let messageError = result.error
      if (messageError.Status == this._messsage.STATUS_NOT_FOUND || messageError.Status == this._messsage.STATUS_TOKEN || messageError.Status == this._messsage.STATUS_NOT_DATA || messageError.Status == this._messsage.STATUS_VALIDATE) {
        this._serviceAlert.presentConfirm(messageError.Message);
      } else {
        //this._serviceAlert.presentConfirm(this._messsage.ERROR_GENERICO);
        this._serviceAlert.presentConfirm(JSON.stringify(messageError));
      }
    }

    if(result.data !=null){
       let data = result.data;
      if (data.typo == undefined || data.typo == null|| data.typo == 0 )
        this.events.publish('user:0');
      else
        this.events.publish('user:1');

      this.nav.setRoot(HomePage, {
        Usuario: front.Usuario,
        Contrasena: front.Contrasena,
        cambioPass: data.changedPass

      });
    }

    this._serviceAlert.dismissLoading();
    
  /*  this.serviceGlobal.PostApiNotToken( this.dataService._urlLogin,body, 1,1)
      .then(data => {

          if (data.Status == 200) {

            if (front.guardarContrasena)
              this.storage.set('user', front.Usuario);

            
           localStorage.setItem('tokenSTS',data.Data.Token)
            //Publica el evento para saber que usuario se conecta 0 o 1
            //0 : es interno
            //1>: es externo
            console.log(data.Data.IdPatrono) 
            if( parseInt(data.Data.IdPatrono)==0 || data.Data.IdPatrono=='0' || data.Data.IdPatrono==null){
              this.events.publish('user:0')
            }
            else{
              this.events.publish('user:1')
            }
            
            
            this.nav.setRoot(HomePage, {
              Usuario: front.Usuario,
              Contrasena: front.Contrasena,
              cambioPass:data.Data.UsuarioPerfil.CambioContrasena

            });

          } else {

            this.dataService.message = data.message;
          }
          this._serviceAlert.dismissLoading();
        },
        Error => {


          let dataVa = this.serviceGlobal.parseResponse(Error.error)



          if (dataVa.Status == this._messsage.STATUS_NOT_FOUND || dataVa.Status == this._messsage.STATUS_TOKEN || dataVa.Status == this._messsage.STATUS_NOT_DATA || dataVa.Status==this._messsage.STATUS_VALIDATE) {
            this._serviceAlert.presentConfirm(dataVa.Message);
          } else {
            this._serviceAlert.presentConfirm(this._messsage.ERROR_GENERICO);
          }

          this._serviceAlert.dismissLoading();
        }
      );*/


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
