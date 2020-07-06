import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ArregloPagoModel } from '../../Models/ArregloPagoModel';
import { InsertActaModel } from '../../Models/InsertActaModel';

/**
 * Generated class for the ModalReadOnlyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-read-only',
  templateUrl: 'modal-read-only.html',
})
export class ModalReadOnlyComponent {
  model: ArregloPagoModel;
  constructor(public viewCtrl: ViewController,
              public navCtrl: NavController, 
              public navParams: NavParams) {
    let data = this.navParams.get("data") as InsertActaModel;
    this.model = data.ArregloPago;
    console.log(this.model.ArregloPago)
  }

  ionViewDidLoad() {
    
  }


  closeModal() {
    this.viewCtrl.dismiss();
  }

}
