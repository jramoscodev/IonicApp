import {
  Component,
  ViewChild,
  OnInit
} from "@angular/core";
import {
  Nav,
  LoadingController,
  ModalController
} from "ionic-angular";
import {
  ActionSheetController
} from 'ionic-angular';



import {
  NavController,
  PopoverController,
  NavParams
} from "ionic-angular";
import {
  DataService
} from '../../services/dataService'
import {
  ServiceGlobals
} from "../../services/ServiceGlobals";

import {
  LoginPage
} from "../login/login";
import {
  ModalRegistrarComponent
} from '../modal-registrar/modal-registrar'
import {
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import {
  ServiceAlert
} from '../../services/ServiceAlert'
import {
  Menssages
} from '../../services/Messages'
import { AuthenticationService } from "../../services/AuthenticationService";


@Component({
  selector: 'page-nosotros',
  templateUrl: 'RegistrarExpediente.html',
  styles: ['RegistrarExpediente.scss'],
  providers: [DataService, ServiceGlobals, ServiceAlert, Menssages,AuthenticationService]
})

export class RegistrarExpedienteComponent implements OnInit {
  // search condition

  @ViewChild(Nav) nav2: Nav;

  rootPage: any = LoginPage;
  myDate = new Date();

  constructor(
    public nav: NavController,
    public popoverCtrl: PopoverController,
    public navParams: NavParams,
    private dataService: DataService,
    private serviceGlobal: ServiceGlobals,
    public loadingController: LoadingController,
    public actionSheetCtrl: ActionSheetController,
    public myModal: ModalController,
    private _serviceAlert: ServiceAlert,
    private _mensajes: Menssages,

    private auth: AuthenticationService
  ) {

    
    this.dataService.dataRegistrarExp = {
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
    }

    this.serviceGlobal.validationCharacterNumerick()
    // this.serviceGlobal.replaceSpace()
    //this.showModal(this.dataService.dataRegistrarExp)


  }

 


  ngOnInit() {



    this.dataService._form = new FormGroup({
      'numeroExpedienteIntegral': new FormControl(null, [
        Validators.maxLength(30)
      ]),
      'numeroExpedienteInterno': new FormControl(null, [
        Validators.maxLength(30)
      ]),
      'nombreEmpresa': new FormControl(null, [
        Validators.maxLength(30)
      ]),
      'fechaDesde': new FormControl(null, [
        Validators.maxLength(30)
      ]),
      'fechaHasta': new FormControl(null, null),
    })


  }

  loadDataExpedientes(datafront) {


    console.log(datafront)


    // alert()

    if (datafront.fechaDesde > datafront.fechaHasta) {
      this._serviceAlert.presentConfirm(this._mensajes.VALIDAR_FECHAS);
      return
    }


    if (datafront.numeroExpedienteIntegral != '')
      datafront.numeroExpedienteIntegral = this.serviceGlobal.replaceSpace(datafront.numeroExpedienteIntegral)
    
      if (datafront.numeroExpedienteInterno != '')
      datafront.numeroExpedienteInterno = this.serviceGlobal.replaceSpace(datafront.numeroExpedienteInterno)

    if (datafront.nombreEmpresa != '')
      datafront.nombreEmpresa = this.serviceGlobal.replaceSpace(datafront.nombreEmpresa)

    this._serviceAlert.showLoading();


    let urlSend = this.dataService._uriFlujoEspecial + 'nroExpedienteIntegral=' + datafront.numeroExpedienteIntegral + '&nroExpedienteInterno=' + datafront.numeroExpedienteInterno + '&nombreRazon=' + datafront.nombreEmpresa + '&fechaDesde=' + datafront.fechaDesde + "&fechaHasta=" + datafront.fechaHasta + "&estado=62&IdFlujo=3&idEstadoFlujo=35&idAccionFlujo=3";


    this.serviceGlobal.GetApi(urlSend, 1)
      .then(data => {

          if (data.Status == 200) {
            this.dataService.ReportExpediente = data.Data;

          } else {

            this.dataService.message = data.message;
          }
          this._serviceAlert.dismissLoading()
        },
        Error => {


          let dataVa = this.serviceGlobal.parseResponse(Error.error)



          if (dataVa.Status == this._mensajes.STATUS_NOT_FOUND || dataVa.Status == this._mensajes.STATUS_TOKEN || dataVa.Status == this._mensajes.STATUS_NOT_DATA) {
            this._serviceAlert.presentConfirm(dataVa.Message);
          } else {
            this._serviceAlert.presentConfirm(this._mensajes.ERROR_GENERICO);
          }

          this._serviceAlert.dismissLoading()
        }
      );


  }





  presentActionSheet(Detalle) {
    const actionSheet = this.actionSheetCtrl.create({
      title: Detalle,
      buttons: [{
        text: 'Contratar',
        role: 'destructive',
        icon: "md-call",
        handler: () => {
          console.log('Destructive clicked');
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        icon: 'md-close',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    actionSheet.present();
  }

   showModal(datafront:any,index:number) {
    var dataMo = {
      datapass: datafront,
    };
    let modal = this.myModal.create(ModalRegistrarComponent, dataMo);
    modal.onDidDismiss( data=>{

      if(data == undefined) return;
      this.dataService.ReportExpediente=  this.dataService.ReportExpediente.filter(function(current){
          if (current['NroExpedienteIntegral'] !== data['numExp']) {
            return current
          }
        })

    });
    modal.present();
 
  }

  logout() {
    this.auth.logOut();
    this.nav.push(LoginPage);
  }

 
}

//
