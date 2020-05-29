import {
  Component,
  OnInit
} from '@angular/core';
import {
  ViewController
} from 'ionic-angular';
import {
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import {
  ServiceAlert
} from '../../services/ServiceAlert'
import {
  ServiceGlobals
} from "../../services/ServiceGlobals";
import {
  DataService
} from '../../services/dataService'

import {
  Menssages
} from '../../services/Messages'

 


@Component({
  selector: 'modal-details',
  templateUrl: 'modal-rest-pass.html',
  styles: ['./modal-rest-pass.scss'],
  providers: [ServiceGlobals, ServiceAlert, DataService,Menssages]
})
export class ModalRestPassComponent implements OnInit {

  public type = 'password';
  public showPass = false;
  constructor(public viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    private _serviceAlert: ServiceAlert,
    private dataService: DataService,
    private _mensajes: Menssages,
    private serviceGlobal: ServiceGlobals) {



  }


  public closeModal() {
    this.viewCtrl.dismiss();
  }

  ngOnInit() {


    this.dataService._dataRecuperarCrendenciales = {
      actualContrasenia: "",
      nuevaContrasenia: "",
      confirmarContrasenia: ""


    }

    this.dataService._formContrasena = this.formBuilder.group({

      actualContrasenia: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20)
      ]),
      nuevaContrasenia: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20)
      ]),
      confirmarContrasenia: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20)
      ])
    })




  }



  cambioContrasena(datafront) {



    this._serviceAlert.showLoading();

    let body = JSON.stringify({
      actualContrasenia: datafront.actualContrasenia,
      nuevaContrasenia: datafront.nuevaContrasenia,
      confirmarContrasenia: datafront.confirmarContrasenia

    })


    //console.log(datafront)
    this.serviceGlobal.SendData(body, this.dataService._uriCambio, 1,3)
      .then(data => {

          if (data.Status == 200) {
            this._serviceAlert.presentConfirm(data.Message);
            this.closeModal()

          } else {

            this._serviceAlert.presentConfirm(data.Message);
          }
          this._serviceAlert.dismissLoading()
        },
        Error => {


          let dataVa = this.serviceGlobal.parseResponse(Error.error)



          if (dataVa.Status == this._mensajes.STATUS_NOT_FOUND || dataVa.Status == this._mensajes.STATUS_TOKEN || dataVa.Status == this._mensajes.STATUS_NOT_DATA || dataVa.Status == this._mensajes.STATUS_VALIDATE) {
            this._serviceAlert.presentConfirm(dataVa.Message);
          } else { 
            this._serviceAlert.presentConfirm(this._mensajes.ERROR_GENERICO);
          }

          this._serviceAlert.dismissLoading()
        }
      );


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
