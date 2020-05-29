import {
  Component,
} from '@angular/core';
import {
  ViewController,
  NavParams
} from 'ionic-angular';

import {
  DataService
} from '../../services/dataService'
import {
  ServiceAlert
} from '../../services/ServiceAlert'
import {
  ServiceGlobals
} from "../../services/ServiceGlobals";
import {
  Menssages
} from '../../services/Messages'
import {
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { CurrencyPipe } from '@angular/common';






@Component({
  selector: 'modal-forma-pago',
  templateUrl: 'modal-forma-pago.html',
  //styleUrls:['modal-pago.scss'], 
  providers: [DataService, ServiceAlert, ServiceGlobals, Menssages,CurrencyPipe]
})
export class ModalFormaPagoComponent {

  public arregloPagos = []
  public pagos={}
  ComForm: FormGroup;

  constructor(public viewCtrl: ViewController,
    private dataService: DataService,
    public navParams: NavParams,
    private _serviceAlert: ServiceAlert,
    private ServiceGlobal: ServiceGlobals,
    private _mensajes: Menssages,
    private currencyPipe:CurrencyPipe) {

    this.dataService.dataRegistrarPago = {
      NroExpedienteIntegral: "",
      NroExpedienteInterno: "",
      nombre: "",
      nombreEncargadoPago: "",
      condicion: "",
      nombrePatrono: "",
      conceptoPago: "",
      valorPago: 0,
      NumeroPago: 0,
      IdSolicitudArregloPago: 0,
      ConceptoPago: "",
      CantidadPago:0

    }

    this.ComForm = new FormGroup({

      'NombreRazon': new FormControl(null, [
          Validators.required,
          //Validators.minLength(5)
      ]),
      'NroExpedienteIntegral': new FormControl(null, [
          Validators.required,
          // Validators.minLength(5),
          //Validators.maxLength(50)
      ]),
      'DescripcionActa': new FormControl(null, [
          Validators.required
      ]),

      'conceptoPago': new FormControl(null, [
          Validators.required
      ]),
      'CantidadPago': new FormControl(null, [
          Validators.required
      ]),
      'NumeroPago': new FormControl(null, [
        Validators.required
    ]),
      'ValorPagar': new FormControl(null, null),
      'FechaPago':new FormControl(null, [
        Validators.required
      ])
  });
   
    this.ServiceGlobal.validationNumeros()

    this.loadFormaPago()

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ModalPage');
    //this.navParams.get('datapass')

    //alert()

    this.dataService.dataRegistrarPago = {
      NroExpedienteIntegral: "",
      NroExpedienteInterno: "",
      nombre: "",
      nombreEncargadoPago: "",
      condicion: "",
      nombrePatrono: "",
      conceptoPago: "",
      valorPago: 0,
      NumeroPago: 0,
      IdSolicitudArregloPago: 0,
      ConceptoPago: "",
      CantidadPago:0

    }


    const body = JSON.parse(JSON.stringify(this.navParams.get("datapass")));

    this.dataService.dataRegistrarPago = body;
    this.dataService.dataRegistrarPago['CantidadPago']=0;
    this.dataService.dataRegistrarPago['NumeroPago']=0;

    console.log(this.dataService.dataRegistrarPago)



    //alert(this.target);
  }

  guardarPagoTesoreria(dataFront) {

    this._serviceAlert.showLoading();
    //return

    dataFront.nombre = dataFront.nombreEncargadoPago;
    console.log(dataFront.nombre);
    let sumaTotal=0;
    for(let x of this.arregloPagos){
      if(x.FechaPago=='' || x.FechaPago==null || x.FechaPago==undefined){
        this._serviceAlert.presentConfirm("La fecha de pago es obligatoria");
        sumaTotal=0;
        this._serviceAlert.dismissLoading();
        return
      }
      sumaTotal+=parseFloat(x.ValorPagar);

    }
  

    if(sumaTotal> parseFloat(dataFront.CantidadPago)){
      this._serviceAlert.presentConfirm("El valor de los pagos sobrepasa el valor del pago total");
      console.log("El valor de los pagos sobrepasa el valor del pago total");
      this._serviceAlert.dismissLoading();
      return;

    }
    if(sumaTotal<parseFloat(dataFront.CantidadPago)){
      this._serviceAlert.presentConfirm("El valor de los pagos es menor el valor del pago total");
      console.log("El valor de los pagos es menor el valor del pago total");
      this._serviceAlert.dismissLoading();
      return;

    }

    console.log(this.arregloPagos.length)
    console.log(dataFront.NumeroPago)
    if(this.arregloPagos.length>parseInt(dataFront.NumeroPago) || this.arregloPagos.length<parseInt(dataFront.NumeroPago) ){

      this._serviceAlert.presentConfirm('La programacion de pagos no coincide con la cantidad de pagos');
      console.log('La programacion de pagos no coincide con la cantidad de pagos');
      this._serviceAlert.dismissLoading();
      return;
    }
    var body = JSON.stringify({
      IdSolicitudArregloPago: dataFront.IdSolicitudArregloPago,
      IdAccionSeguimientoFlujo: dataFront.ListaAcciones[0].IdAccionSeguimientoFlujo,
      IdFlujo: 3,
      NroExpedienteIntegral: dataFront.NroExpedienteIntegral,
      NroExpedienteInterno: dataFront.NroExpedienteInterno,
      IdTrabajador: this.dataService.dataRegistrarPago['IdTrabajador'],
      IdPatronoEmpleador: this.dataService.dataRegistrarPago['IdPatronoEmpleador'],
      IdTipo: 178,
      FechaRegistro: "/Date(1579284311433)/",
      FechaUltimaMod: "/Date(1579284311433)/",
      IdUsuarioMod: 46,
      Estado: 10,
      IdCargo: "2",
      ConceptoPago: dataFront.ConceptoPago,
      DescripcionActa: dataFront.DescripcionActa,
      TotalPagar: dataFront.TotalPagar,
      CantidadPago: dataFront.CantidadPago,
      ListaDetallePago: this.arregloPagos
    });


    console.log('Listo para consumir el servicio');
    //return
    this.ServiceGlobal.SendData(body, this.dataService.uriPagoTesoreria, 1, 5)
      .then(data => {
          if (data.Status == 200) {
            // this.dataService.ReportExpediente = data.Data;
            
            this._serviceAlert.presentConfirm(data.Message)
            this.closeModal()
          } else {

            this.dataService.message = data.message;
          }
          this._serviceAlert.dismissLoading()
        },
        Error => {
          let dataVa = this.ServiceGlobal.parseResponse(Error.error)
          if (dataVa.Status == 500 || dataVa.Status == this._mensajes.STATUS_NOT_FOUND || dataVa.Status == this._mensajes.STATUS_TOKEN || dataVa.Status == this._mensajes.STATUS_NOT_DATA || this._mensajes.STATUS_VALIDATE) {
            this._serviceAlert.presentConfirm(dataVa.Message);
          } else {
            this._serviceAlert.presentConfirm(this._mensajes.ERROR_GENERICO);
          }

          this._serviceAlert.dismissLoading()
        }
      );
  }
  loadFormaPago() {

    this.ServiceGlobal.GetApiCatalogo(this.dataService.uriFormaPago, 1)
      .then(data => {

          this.dataService.dataFormaPago = []
          if (data.Status == 200) {
            this.dataService.dataFormaPago = data.Data;

          } else {

            this.dataService.message = data.message;
          }
          this._serviceAlert.dismissLoading()


        },
        Error => {


          let dataVa = this.ServiceGlobal.parseResponse(Error.error)

          if (dataVa.Status == this._mensajes.STATUS_NOT_FOUND || dataVa.Status == this._mensajes.STATUS_TOKEN || dataVa.Status == this._mensajes.STATUS_NOT_DATA) {
            this._serviceAlert.presentConfirm(dataVa.Message);
          } else {
            this._serviceAlert.presentConfirm(this._mensajes.ERROR_GENERICO);
          }

          this._serviceAlert.dismissLoading()
        }
      );


  }

  addPago(dataFront) {

    this.arregloPagos=[]
   
    
    if(dataFront.CantidadPago==""){
      this._serviceAlert.presentConfirm('Ingrese el total a pagar')
      return
    }

    if(dataFront.NumeroPago=="" || dataFront.NumeroPago==0){
      this._serviceAlert.presentConfirm('Ingrese la cantidad de pagos')
      return
    }


    for(let x=0;x<parseInt(dataFront.NumeroPago);x++){

      this.arregloPagos.push({
        NumeroPago: x+1,
        FechaPago: '',
        ValorPagar: 0,
        FechaUltimaMod: "",
        IdUsuarioMod: 0,
        Estado: 10
      })
    }
    

  }

  eliminar(index){

    for (var i = 0; i < this.arregloPagos.length; i++) {
      if (i==index) {
        console.log( this.arregloPagos[i])
        
        this.dataService.dataRegistrarPago['NumeroPago']-= 1;
        this.arregloPagos.splice(i, 1);
        break;
      }
    }
  }

  box_price_formatted= '';
  box_price = 0;

  onChangePrice(evt) {
    if(evt!='' && evt!=null){
    this.box_price = evt.replace(/[^0-9.]/g, "");
    this.box_price_formatted = this.getCurrency(this.box_price)
    this.dataService.dataRegistrarPago['CantidadPago']=this.box_price_formatted
  }
      
  }

  onChangePriceTable(items) {
    /*for(let x of items){
      let box_price=0;
      let box_price_formatted=''
      if(x.ValorPagar!='' && x.ValorPagar!=null && x.ValorPagar!=0){
        box_price= x.ValorPagar.replace(/[^0-9.]/g, "");
        box_price_formatted = this.getCurrency(box_price);
        x.ValorPagar=box_price_formatted
      }P/
      
    }*/


    
   if(items.ValorPagar!='' && items.ValorPagar!=null && items.ValorPagar!=0){
     console.log(items.ValorPagar)
     
    let box_price = items.ValorPagar.replace(/[^0-9.]/g, "");
    let box_price_formatted = this.getCurrency(box_price)
  
    items.ValorPagar=box_price_formatted;
    console.log(box_price_formatted)
     //$('#'+id).val(box_price_formatted);
  
   }
  }

  getCurrency(amount: number) {
    return this.currencyPipe.transform(amount, 'L');
  }
  public closeModal() {
    this.viewCtrl.dismiss();
  }
}
