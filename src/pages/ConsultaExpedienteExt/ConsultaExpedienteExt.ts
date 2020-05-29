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
  ModalDetailsComponent
} from '../modal-details/modal-details';
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


@Component({
  selector: 'page-consulta',
  templateUrl: 'ConsultaExpedienteExt.html',
  providers: [DataService, ServiceGlobals, ServiceAlert, Menssages]
})

export class ConsultaExpedienteExtComponent implements OnInit {
  // search condition

  @ViewChild(Nav) nav2: Nav;

  rootPage: any = LoginPage;
  colapse = false;

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
    private _mensajes: Menssages

  ) {

    //this.serviceGlobal.replaceSpace()

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
        Validators.maxLength(100)
      ]),
      'fechaDesde': new FormControl(null, [
        Validators.maxLength(30)
      ]),
      'fechaHasta': new FormControl(null, null),
    })


    this.dataService.dataExpedienteExt = {
      numeroExpedienteIntegral: "",
      numeroExpedienteInterno: "",
      nombreEmpresa: "",
      fechaDesde: "",
      fechaHasta: ""

    }


  }





  loadDataExpedientes(datafront) {



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


    let urlSend = this.dataService._uriFlujo + 'nroExpedienteIntegral=' + datafront.numeroExpedienteIntegral + '&nroExpedienteInterno=' + datafront.numeroExpedienteInterno + '&nombreRazon=' + datafront.nombreEmpresa + '&fechaDesde=' + datafront.fechaDesde + "&fechaHasta=" + datafront.fechaHasta + "&estado=0&IdFlujo=3";


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



  showModal(datafront) {
    var dataMo = {
      datapass: datafront
    };

    var modal = this.myModal.create(ModalDetailsComponent, dataMo);
    modal.present();

  }


  logout() {
    localStorage.clear();
    this.nav.push(LoginPage);
  }
}

//
