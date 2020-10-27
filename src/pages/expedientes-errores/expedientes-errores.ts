import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { InsertActaModel } from '../../Models/InsertActaModel';
import { ModalReadOnlyComponent } from '../modal-read-only/modal-read-only';

/**
 * Generated class for the ExpedientesErroresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-expedientes-errores',
  templateUrl: 'expedientes-errores.html',
})
export class ExpedientesErroresPage {

  expedientesErroneos: InsertActaModel[]
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public model: ModalController,) {

    this.expedientesErroneos = JSON.parse(localStorage.getItem('errorProcess')) as InsertActaModel[];
    if(this.expedientesErroneos == null){
      this.expedientesErroneos = new Array<InsertActaModel>();
    }
    
  }

  ionViewDidLoad() {
   
  }

  showInfo(item: InsertActaModel){
    let show =  this.model.create(ModalReadOnlyComponent,{'data':item})
    show.present();
  }
}
