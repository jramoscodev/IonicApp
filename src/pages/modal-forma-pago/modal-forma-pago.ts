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
import { ArregloPagoModel,Pagos } from '../../Models/ArregloPagoModel';


@Component({
  selector: 'modal-forma-pago',
  templateUrl: 'modal-forma-pago.html',
  //styleUrls:['modal-pago.scss'], 
  providers: [DataService, ServiceAlert, ServiceGlobals, Menssages,CurrencyPipe]
})
export class ModalFormaPagoComponent {
  value:Number;
  hasFee:boolean=false;
  listaPagos: Pagos[];
  today:String = new Date().toISOString();
  model: ArregloPagoModel;
  messageErrorFee:String[];
  messageErrorPayments:String[];
  messageErrors:String[];
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

     //init
    var data = this.navParams.get("datapass");
    this.model = new ArregloPagoModel(); 
    this.model.NroExpedienteIntegral = data['NroExpedienteIntegral']
    console.log(data)

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
    this.ServiceGlobal.FormatCurrency()
    this.loadFormaPago()
    this.messageErrorPayments = new Array<String>();
    this.messageErrorFee = new Array<String>();
    this.messageErrors = new Array<String>();
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

    //console.log(this.dataService.dataRegistrarPago)



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
  closeModal() {
    let data = { 'isSave': false };
    this.viewCtrl.dismiss(data);
  }

  savePayment(){

    if (!this.Validate()){
      return;
    }

    this.model.Pagos = this.listaPagos;
    let data = { 'isSave': true,'data':this.model };
    console.log('save data in dismiss')
    this.viewCtrl.dismiss(data);
  }

  onKeyPress(e:any, value:any){
    if (e.code == "Space") e.preventDefault();
    if (e.key == "." && (value == undefined || value =="")) e.preventDefault();
    if (e.key == "." && String(value).includes('.')) e.preventDefault();
    if (e.key == "0" && (value == undefined || value == "")) e.preventDefault();
    if (String(value).length > 8) {
      e.preventDefault();
    }
    if(this.hasDecimal(value)){
       
      let precision = value.toString().split('.')[1].length;
      if (precision >= 2) e.preventDefault();
    }
    
  }
  onFeeKeyPress(e: any, value: any){
    if (e.code == "Space") e.preventDefault();
    if (e.key == ".") e.preventDefault();
    if (e.key == "0" && (value == undefined || value == "")) e.preventDefault();
    if (this.hasDecimal(value)) {
      e.preventDefault();
    }
    if (String(value).length > 1){ e.preventDefault();}
    this.hasFee = true;
  }


  private hasDecimal(n:number){
    return (n - Math.floor(n)) !== 0; 
  }


  async addFee(){
    console.log(this.model)
    if(this.model.NumPagos == undefined 
      || this.model.NumPagos == null
      || this.model.TotalPago == undefined || this.model.TotalPago == null){
      return;
    }

    //naive
    let nextPay = new Date();
    this.listaPagos = new Array<Pagos>();
    let cuota = Number.parseFloat((this.model.TotalPago / this.model.NumPagos).toFixed(2));
    for(let i = 0; i< this.model.NumPagos; i++){
      let pago = new Pagos();
      nextPay.setMonth(nextPay.getMonth() + 1); //add one month in each loop
      
      pago.FechaPago = new Date(nextPay);
      pago.FechaPagoText =pago.FechaPago.toISOString();
      pago.MinDate = this.itemDateMinDate(i);
      pago.ValorPago = cuota;
      pago.CuotaNum = i+1; 
      this.listaPagos.push(pago);
    }

  }

  private itemDateMinDate(index:number) {
     let today = new Date();
     if(index == 0 ) return today.toISOString();
     let itemBefore = this.listaPagos[index-1].FechaPago;
     return itemBefore.toISOString();
  }

 private itemDateIsValid(){
   this.messageErrorPayments = new Array<String>();

   for (let i = 0; i <= this.listaPagos.length - 1; i++)
   {
     let currentDate = this.listaPagos[i].FechaPago;
     if (i == 0){
       let dAf = this.listaPagos[i + 1].FechaPago;
       if (currentDate > dAf )
         this.messageErrorPayments.push(`Fecha de Pago ${i+1} debe ser menor a Pago ${i +2}`);
      continue;
    }
     if (i == this.listaPagos.length - 1) {
       let dBf = this.listaPagos[i - 1].FechaPago;
       if(dBf >= currentDate)
         this.messageErrorPayments.push(`Fecha de Pago ${i+1} debe ser mayor a Pago ${i}`);
      continue;
     }
     
     let beforeCurrent = this.listaPagos[i - 1].FechaPago;
     let afterCurrent = this.listaPagos[i + 1].FechaPago;
     if (beforeCurrent >= currentDate) this.messageErrorPayments.push(`Fecha de Pago ${i + 1} debe ser mayor a cuota ${i}`);
     if (currentDate > afterCurrent) this.messageErrorPayments.push(`Fecha de Pago ${i + 1} debe ser menor a cuota ${i + 2}`);

   }
    
  
  }

  onItemValueKeyPress(e:any,value:any,index:any){

    if (e.key == "." && (value == undefined || value == "")){ e.preventDefault(); return;}
    if (e.key == "." && String(value).includes('.')){e.preventDefault(); return;}
    if (e.key == "0" && (value == undefined || value == "")){ e.preventDefault(); return;}
    if (String(value).length > 8) {
      e.preventDefault();
      return;
    }
    if (this.hasDecimal(value)) {

      let precision = value.toString().split('.')[1].length;
      if (precision >= 2) e.preventDefault();
      return;
    }
   
  }

  onItemBlur(e:any){
    this.messageErrorFee = new Array<String>();
    var sumTotal = this.listaPagos.reduce(function (prev, cur) {
      return prev + (cur.ValorPago * 1);
    }, 0);
    console.log(sumTotal)
    
    if (Number.parseFloat(sumTotal.toFixed(2)) > this.model.TotalPago){ this.messageErrorFee.push('Suma de Pagos es mayor a Pago Total');}
    
    if (this.model.TotalPago > Number.parseFloat(sumTotal.toFixed(2))){ this.messageErrorFee.push('Suma de Pagos es menor a Pago Total');}

    if (this.hasEmptyVules()){ this.messageErrorFee.push('Pago no puede ser vacio o cero');}

    console.log(this.messageErrorFee)
  }
  
  private hasEmptyVules() {
    for(let i = 0; i<= this.listaPagos.length -1; i++){
      if (this.listaPagos[i].ValorPago == null || this.listaPagos[i].ValorPago == "")
       return true;
    }
    return false;
  }

  onItemDateChange(e:any,index:any){

    let dateString = `${e.month}/${e.day}/${e.year}`;
    let date = new Date(dateString);
    this.listaPagos[index].FechaPago = date;
    this.listaPagos[index].FechaPagoText = date.toISOString();
    let len = this.listaPagos.length -1;
    if(index != len)
    {
      this.listaPagos[index + 1].MinDate = date.toISOString();
    }else{
      this.listaPagos[index].MinDate = this.itemDateMinDate(index);
    }
    this.itemDateIsValid()
  }

  private Validate()
  {
    this.messageErrors = new Array<String>();


    if (this.model.ConceptoPago == undefined || this.model.ConceptoPago == null) this.messageErrors.push('Concepto Pago es requerido');
    if (this.model.Nombre == undefined || this.model.Nombre == null) this.messageErrors.push('Nombre Pago es requerido');
    if (this.model.DescripcionActa == undefined || this.model.DescripcionActa == null) this.messageErrors.push('Descripcion Pago es requerido');
    if (this.model.TotalPago == undefined || this.model.TotalPago == null) this.messageErrors.push('Total Pago no valido');
    if (this.model.NumPagos == undefined || this.model.NumPagos == null) this.messageErrors.push('Numero de pagos no valido');
 
 
    return this.messageErrors.length > 0 ? false : true;
  }

}
