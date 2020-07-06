import {
  Component,
  OnInit
} from '@angular/core';
import {
  ViewController,
  NavParams,
  ModalController,
  NavController,
  ActionSheetController 
} from 'ionic-angular';
import {
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

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
  DataService
} from '../../services/dataService'

import * as $ from 'jquery';
import {
  ModalFormaPagoComponent
} from '../modal-forma-pago/modal-forma-pago'
import { PhotoService, FilesResponsePhoto, FileType } from '../../services/PhotoService';

import { ListFiles } from '../../Models/ListFiles';
import { InsertActaModel } from '../../Models/InsertActaModel';
import { ArregloPagoModel } from '../../Models/ArregloPagoModel';


@Component({
  selector: 'modal-details',
  templateUrl: 'modal-registrar.html',
  styles: ['./modal-registrar.scss'],
  providers: [ServiceGlobals, ServiceAlert, DataService, Menssages, PhotoService]
})
export class ModalRegistrarComponent implements OnInit {
  hasPayment: any;
  hasInfraction:boolean= false;
  actaFiles: ListFiles[] = new Array();
  attchFiles: ListFiles[] = new Array();
  dataToStorage: InsertActaModel[] = new Array();
  payment: ArregloPagoModel;
  files;
  maxFiles:number = 5;
  public img;

  public listPathFile = [];
  public listUsuario = []
  //contrast: number = 0;

  file;
  urlimg = ''
  ComForm: FormGroup;
  extensiones;

  //archivo pobligatorio
  rutaFile;
  rutaSelectFile;

  constructor(public nav: NavController,
    public actionSheetCtrl: ActionSheetController,
    public viewCtrl: ViewController,
    private _serviceAlert: ServiceAlert,
    private dataService: DataService,
    private ServiceGlobal: ServiceGlobals,
    private _mensajes: Menssages,
    public navParams: NavParams,
    public myModal: ModalController,
    private photo: PhotoService) {

    this.ServiceGlobal.validationNumeros()

    this.dataService.dataRegistrarExp = {
      numeroExpedienteIntegral: "",
      numeroExpedienteInterno: "",
      IdRegistroActa: 0,
      IdAccionSeguimientoFlujo: "",
      NroExpedienteIntegral: "",
      NroExpedienteInterno: "",
      Tipo: 178,
      FechaActa: "",
      Detalle: "",
      PlantillaHtml: "",
      RutaArchivo: "",
      TieneInfraccion: 208,
      TieneArregloPago: "",
      FechaUltimaMod: null,
      IdUsuarioMod: 0,
      Estado: 10,
      nombreEmpresa: "",
      fechaDesde: "",
      fechaHasta: "",
      file: "",
      fileVideo: '',
      fileAudio: '',
      tipoArchivo: 0,
      Porcentaje: 0,
      IdTrabajador: "",
      IdPatronoEmpleador: "",
      ListaAprobador: []
    }

    this.ComForm = new FormGroup({

      'NombreRazon': new FormControl(null, [
        // Validators.required,
        //Validators.minLength(5)
      ]),
      'NroExpedienteIntegral': new FormControl(null, [
        Validators.required,
        // Validators.minLength(5),
        //Validators.maxLength(50)
      ]),
      'FechaActa': new FormControl(null, [
        Validators.required
      ]),

      'tipoActa': new FormControl(null, [
        Validators.required
      ]),
      // 'TieneInfraccion': new FormControl(null, [
      //   Validators.required
      // ]),
      // 'TieneArregloPago': new FormControl(null, [
      //   Validators.required
      // ]),
      // 'file': new FormControl(null, [
      //   Validators.required
      // ]),
      'RutaArchivo': new FormControl(null, null),
      'tipoArchivo': new FormControl(null, null),
      'fileVideo': new FormControl(null, null),
      'fileAudio': new FormControl(null, null),
      'Porcentaje': new FormControl(null, null),
    });


    this.listPathFile = []

    this.extensiones = ".png"
  
  }


  public closeModal() {
    this.viewCtrl.dismiss();
  }

  dismiss(expediente:any) {
    let data = { 'numExp': expediente };
    this.viewCtrl.dismiss(data);
  }

  async TakePicture(e)
  {
   
    let photoData = await this.photo.takePicture();

    if (photoData['error'] !== undefined){
      console.log('El dispositivo no soporta esta funcionalidad');
      return;
    }
    let current = new ListFiles();
    current.name = photoData['fileName'];
    current.path = photoData['path'];
    current.type = 1;
    this.actaFiles.push(current);
   
  }

  delete(item: ListFiles) {
    let index = this.actaFiles.indexOf(item);
    if (index !== -1) {
      this.actaFiles.splice(index, 1);
    }
  }

  deleteAttch(item: ListFiles) {
    let index = this.attchFiles.indexOf(item);
    if (index !== -1) {
      this.attchFiles.splice(index, 1);
    }

  }

  async chooseFromGallery()
  {
    let gallery = await this.photo.openGallery();
    
    if (gallery == null) return;
    if (gallery['error'] !== undefined) {
      console.log('El dispositivo no soporta esta funcionalidad');
      return;
    }
    let collection = gallery as FilesResponsePhoto[];
    for (let i = 0; i <= collection.length -1; i++ )
    {
      let current = new ListFiles();
      current.name = collection[i].fileName;
      current.path = collection[i].path;
      current.type = 1;
      this.actaFiles.push(current);
    }

  }

  async choosePdf()
  {
    let pdfData = await this.photo.openDirectory();
    console.log(pdfData)
    if (pdfData == null) return;
    if (pdfData['error'] !== undefined) {
      console.log('El dispositivo no soporta esta funcionalidad');
      return;
    }
    let current = new ListFiles();
    current.name = pdfData['fileName'];
    current.path = pdfData['path'];
    current.type = 3;
    this.actaFiles.push(current);
  }

  async chooseImage() {
    let gallery = await this.photo.openGallery();

    if (gallery == null) return;
    if (gallery['error'] !== undefined) {
      console.log('El dispositivo no soporta esta funcionalidad');
      return;
    }
    let collection = gallery as FilesResponsePhoto[];
    for (let i = 0; i <= collection.length - 1; i++) {
      let current = new ListFiles();
      current.name = collection[i].fileName;
      current.path = collection[i].path;
      current.type = 1;
      this.attchFiles.push(current);
    }

  }
  async chooseFile(type:FileType)
  {
    let file = await this.photo.openFileType(type);
    if (file == null) return;
    if (file['error'] !== undefined) {
      console.log('El dispositivo no soporta esta funcionalidad');
      return;
    }
    let current = new ListFiles();
    current.name = file['fileName'];
    current.path = file['path'];
    current.type = this.photo.getFileContent(type)
    if(this.attchFiles.length >=this.maxFiles){
      this._serviceAlert.presentConfirm('Número de archivos adjuntos excedidos');
      this._serviceAlert.dismissLoading();
      return;
    }

    this.attchFiles.push(current);
  }

 

  async presentActionSheet() {
    
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Adjuntar Archivo',
      buttons: [
        {
          text: 'Galeria',
          icon:'image',
          handler: () => {
            this.chooseFromGallery();
            
          }
        }, 
        {
          text: 'Pdf',
          icon:'document',
          handler: () => {
            this.choosePdf();
          }
        }, 
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
     await actionSheet.present();

  }

  async presentFileActionSheet() {

    const actionSheet = this.actionSheetCtrl.create({
      title: `Adjuntar Archivo (Máximo ${this.maxFiles} archivos)`,
      buttons: [
        {
          text: 'Galeria',
          icon: 'image',
          handler: () => {
           this.chooseImage()

          }
        },
        {
          text: 'Video ( 1 min max.)',
          icon: 'videocam',
          handler: () => {
            this.chooseFile(FileType.Video)
          }
        },
        {
          text: 'Audio (1 min max.)',
          icon: 'musical-notes',
          handler: () => {
            this.chooseFile(FileType.Audio);
          }
        },
        {
          text: 'Pdf',
          icon: 'document',
          handler: () => {
            this.chooseFile(FileType.Pdf);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        },
        
      ]
    });
    if (this.attchFiles.length >= this.maxFiles) {
      this._serviceAlert.presentConfirm(`Máximo de archivos adjuntos permitidos ${this.maxFiles}`);
      this._serviceAlert.dismissLoading();
      return;
    }
    await actionSheet.present();

  }


  ionViewDidLoad() {


    this.dataService.dataRegistrarExp = {
      numeroExpedienteIntegral: "",
      numeroExpedienteInterno: "",
      IdRegistroActa: 0,
      IdAccionSeguimientoFlujo: "325",
      NroExpedienteIntegral: "",
      NroExpedienteInterno: "",
      Tipo: 178,
      FechaActa: "",
      Detalle: "",
      PlantillaHtml: "",
      RutaArchivo: "",
      TieneInfraccion: 208,
      TieneArregloPago: "",
      FechaUltimaMod: null,
      IdUsuarioMod: 0,
      Estado: 10,
      nombreEmpresa: "",
      fechaDesde: "",
      fechaHasta: "",
      file: "",
      NombreRazon: "",
      tipoActa: "Acta Circunstancial",
      tipoArchivo: 0,
      Porcentaje: 0,
      IdTrabajador: "",
      IdPatronoEmpleador: "",
      ListaAprobador: []
    }



    const body = JSON.parse(JSON.stringify(this.navParams.get("datapass")));

    this.dataService.dataRegistrarExp = body;
    this.dataService.dataRegistrarExp["FechaActa"] = new Date().toLocaleString();
    this.dataService.dataRegistrarExp["Porcentaje"] = body.Porcentaje;
    this.listUsuario = body.ListaAprobador;

    console.log("desde modal-registro: "+JSON.stringify(this.dataService.dataRegistrarExp));

    //this.loadTipoActa()

    this.dataService.solPago = {
      IdAccionSeguimientoFlujo: "374",
      IdFlujo: "3",
      NroExpedienteIntegral: "STSS-17012020000036",
      NroExpedienteInterno: "DGIT-01011701202000004",
      IdTrabajador: 14,
      IdPatronoEmpleador: 1,
      IdTipo: 178,
      Estado: 10
    }



  }
  body;
  ngOnInit() {
    /*this.body=this;
    

    $('#file').change(function () {
     
      $('#file')[0].files;
       alert()
      
    })*/

    var self = this;
    $(function () {

      $('#RutaArchivo').change('click', function (e) {
        self.onFile(e);
      });

      $('#file').change('click', function (e) {
        self.onArchivoSeleccionado(e);
      });




    })
  }





  valFile(file, tipo) {

    let valid = true;

    if (tipo == 1 && file != 'image/jpeg' && file != 'image/png' && file != 'application/pdf' && file != 'image/jpg') {
      valid = false;
    } else if (tipo == 2 && file != 'audio/mpeg' && file != 'audio/mp3' && file != '') {
      valid = false;
    } else if (tipo == 3 && file != 'video/mp4') {
      valid = false;
    }

    return valid


  }

  public onArchivoSeleccionado($event) {




    let tipoFile = this.dataService.dataRegistrarExp['tipoArchivo'];
    if ($event.target.files.length === 1) {

     // alert($event.target.files[0].type)
      // console.log($event.target.files[0])
      if (!this.valFile($event.target.files[0].type, tipoFile)) {

        $('#file').val('')
        this._serviceAlert.presentConfirm('El tipo de archivo no es valido')
        return

      }
      //if(tipoFile==1 && )

      let fileSize = $event.target.files[0].size;
      var siezekiloByte = parseInt(fileSize) / 1024;
      if (siezekiloByte > 50000) {
        this._serviceAlert.presentConfirm('El archivo sobrepasa los 50MB permitidos')
        return
      }



      this.urlimg = ""


      this.file = $event.target.files[0];

      var reader = new FileReader();
      this.urlimg = $event.target.files[0].name

      reader.readAsDataURL($event.target.files[0]);

      setTimeout(() => {
        this._serviceAlert.showLoading();
        this.SaveFiles(this.file, this.dataService.dataRegistrarExp['tipoArchivo'], this.urlimg, 2)
      }, 2000);



    }

  }



  onFile($event2) {


    // alert()
    if ($event2.target.files.length === 1) {

      if (!this.valFile($event2.target.files[0].type, 1)) {

        $('#RutaArchivo').val('')
        
        this._serviceAlert.presentConfirm('El tipo de archivo no es valido')
        return

      }

      let fileSize = $event2.target.files[0].size;
      var siezekiloByte = parseInt(fileSize) / 1024;
      if (siezekiloByte > 50000) {
        this._serviceAlert.presentConfirm('El archivo sobrepasa los 50MB permitidos')
        return
      }

      this.rutaFile = ""


      this.rutaFile = $event2.target.files[0];

      var reader = new FileReader();
      this.rutaSelectFile = $event2.target.files[0].name
      console.log(this.rutaSelectFile)

      reader.readAsDataURL($event2.target.files[0]);

      setTimeout(() => {
        this._serviceAlert.showLoading();
        this.SaveFiles(this.rutaFile, this.dataService.dataRegistrarExp['RutaArchivo'], this.rutaSelectFile, 1)
      }, 2000);



    }

  }



  onAplicaPago(datafront) {

    
    //this.mostrarModalFormaPago(datafront)
    // return

    if (datafront.TieneArregloPago == 1 && datafront.TieneInfraccion == 0) {
      this._serviceAlert.presentConfirm("No se permite ingresar un arreglo de pago si no existe infracción")
      datafront.TieneArregloPago = 0
      return
    }
    if (datafront.TieneArregloPago == 1 && datafront.TieneInfraccion == 1) {

      // this._serviceAlert.showLoading();
      datafront.IdTrabajador = this.dataService.dataRegistrarExp["IdTrabajador"];
      datafront.IdPatronoEmpleador = this.dataService.dataRegistrarExp["IdPatronoEmpleador"];
      this.mostrarModalFormaPago(datafront);
      // var body = JSON.stringify({
      //   IdAccionSeguimientoFlujo: datafront.ListaAcciones[0].IdAccionSeguimientoFlujo,
      //   IdFlujo: "3",
      //   NroExpedienteIntegral: datafront.NroExpedienteIntegral,
      //   NroExpedienteInterno: datafront.NroExpedienteInterno,
      //   IdTrabajador: this.dataService.dataRegistrarExp["IdTrabajador"],
      //   IdPatronoEmpleador: this.dataService.dataRegistrarExp["IdPatronoEmpleador"],
      //   IdTipo: 178,
      //   Estado: datafront.ListaAcciones[0].Estado


      // })


      // //console.log(this.dataService.uriSolPago)
      // this.ServiceGlobal.SendData(body, this.dataService.uriSolPago, 1, 5)
      //   .then(data => {
      //     if (data.Status == 200) {
      //       // this.dataService.ReportExpediente = data.Data;
      //       datafront.IdSolicitudArregloPago = data.Data;
      //       // this._serviceAlert.presentConfirm(data.Message)
      //       this.mostrarModalFormaPago(datafront)
      //     } else {

      //       this.dataService.message = data.message;
      //     }
      //     this._serviceAlert.dismissLoading()
      //   },
      //     Error => {
      //       let dataVa = this.ServiceGlobal.parseResponse(Error.error)
      //       if (dataVa.Status == 500 || dataVa.Status == this._mensajes.STATUS_NOT_FOUND || dataVa.Status == this._mensajes.STATUS_TOKEN || dataVa.Status == this._mensajes.STATUS_NOT_DATA) {
      //         this._serviceAlert.presentConfirm(dataVa.Message);
      //       } else {
      //         this._serviceAlert.presentConfirm(this._mensajes.ERROR_GENERICO);
      //       }

      //       this._serviceAlert.dismissLoading()
      //     }
      //   );


    }

  }


  private setToLocalStorage(data: InsertActaModel){
    var hasData = JSON.parse(localStorage.getItem('background')) as InsertActaModel[];
    if(hasData == null) hasData = Array<InsertActaModel>();
    hasData.push(data);
    localStorage.setItem('background', JSON.stringify(hasData));
  }




  rutaFinal;
  async Save(comp) {


    // if(this.hasInfraction && this.payment == undefined){
    //   this._serviceAlert.presentConfirm('Debe agregar arreglo de pago');
    //   return;

    // }

    let insert = new InsertActaModel();
   
    insert.IdAccionSeguimiento = comp.ListaAcciones[0].IdAccionSeguimientoFlujo;
    insert.NroExpedienteIntegral = comp.NroExpedienteIntegral;
    insert.NroExpedienteInterno = comp.NroExpedienteInterno;
   // insert.Tipo = 178;
    insert.FechaActa = comp.FechaActa;
    insert.TieneInfraccion= this.hasInfraction ? 1:0;
    if(this.payment == undefined || this.payment == null ) {
      insert.TieneArregloPago = 0;
    } else { insert.TieneArregloPago = 1;}
    
    //insert.Estado = 10;
    insert.rutasActas = this.actaFiles;
    insert.rutasAttch = this.attchFiles;
    insert.IdAccionSeguimiento= comp.ListaAcciones[0].IdAccionSeguimientoFlujo;
    insert.ArregloPago = (this.payment == undefined ? null : this.payment);
    this._serviceAlert.showLoading()
   try{
     console.log('request:',insert)
     let result = await this.ServiceGlobal.UpdateActa(insert);
     console.log(result);

     this._serviceAlert.presentConfirm('Datos actualizados')
     this._serviceAlert.dismissLoading();
     this.dismiss(insert.NroExpedienteIntegral)
   }catch(e){
     console.log('catch error',e);
     if (e.status == 0)
     {
       this._serviceAlert.presentConfirm('No se puedo establecer conexión a internet, se almacenara la información para su procesamiento ');
       this.setToLocalStorage(insert);
       this._serviceAlert.dismissLoading();
       this.dismiss(insert.NroExpedienteIntegral)
      }else{
       if (e.error.Status == this._mensajes.STATUS_VALIDATE || e.error.Status == this._mensajes.STATUS_NOT_FOUND || e.error.Status == this._mensajes.STATUS_TOKEN || e.error.Status == this._mensajes.STATUS_NOT_DATA) {
         this._serviceAlert.presentConfirm(e.error.Message);
       } else {
         this._serviceAlert.presentConfirm(this._mensajes.ERROR_GENERICO);
       }
       this._serviceAlert.dismissLoading();
     } 
   }
    
  }


  SaveFiles(file, tipo, nombre, addPath) {

    console.log(nombre)


    let formData = new FormData();
    formData.append('archivo', file);

    this.ServiceGlobal.SendFile(formData, "cargararchivo")
      .then(data => {
        let dataVa = this.ServiceGlobal.parseResponse(data)

        if (dataVa.Status == 200) {

          if (addPath == 2) {
            this.listPathFile.push({
              tipo: tipo,
              Url: dataVa.Data[0].Path,
              nombre: nombre
            });
            $('#file').val('');
          } else {
            this.rutaFinal = dataVa.Data[0].Path
            $('#RutaArchivo').val('');
          }

          console.log(this.listPathFile)

        } else {

          // sendFileRes = false;
          this._serviceAlert.presentConfirm(this._mensajes.ERROR_GENERICO);
        }
        this._serviceAlert.dismissLoading()
      },
        Error => {
          let dataVa = this.ServiceGlobal.parseResponse(Error.error)
          if (dataVa.Status == 500 || dataVa.Status == this._mensajes.STATUS_NOT_FOUND || dataVa.Status == this._mensajes.STATUS_TOKEN || dataVa.Status == this._mensajes.STATUS_NOT_DATA) {
            this._serviceAlert.presentConfirm(dataVa.Message);
          } else {
            this._serviceAlert.presentConfirm(this._mensajes.ERROR_GENERICO);
          }
          //sendFileRes = false;
          this._serviceAlert.dismissLoading()
        }

      );


    //return sendFileRes;



  }





  eliminar(index) {

    for (var i = 0; i < this.listPathFile.length; i++) {
      if (i == index) {
        this.listPathFile.splice(i, 1);
        break;
      }
    }
  }

  truncate(text) {
    if (text.length > 15)
      text = text.substring(0, 15) + '...'


    return text


  }
  mostrarModalFormaPago(datafront) {
    var dataMo = {
      datapass: datafront
    };

    var modal = this.myModal.create(ModalFormaPagoComponent, dataMo);
    modal.present();

  }

  addPayment(e:any){
   // console.log(this.dataService.dataRegistrarExp);
    //this.mostrarModalFormaPago(this.dataService.dataRegistrarExp);
    console.log(this.dataService.dataRegistrarExp)
    let payment = this.myModal.create(ModalFormaPagoComponent, { datapass: this.dataService.dataRegistrarExp});
    payment.onDidDismiss(data => {
      if(data['isSave']){
        this.hasPayment = true;
        this.payment = data['data'] as ArregloPagoModel;
      }
    });
    payment.present();
  }

  deletePayment()
  {
    this.hasPayment = undefined;
  }

}

