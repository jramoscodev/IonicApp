 import {
   Component
 } from '@angular/core';
import {
  ViewController,
  NavParams
} from 'ionic-angular';

import {DataService} from '../../services/dataService'
import * as $ from 'jquery';




@Component({
  selector: 'modal-details',
  templateUrl: 'modal-details.html',
  styles: ['./modal-details.scss'],
  providers: [DataService]
})
export class ModalDetailsComponent {


  public listUsuario=[]

  constructor(public viewCtrl: ViewController,
              private dataService:DataService,
              public navParams: NavParams) { 

    this.dataService.dataDetailsExpe = {
      NroExpedienteIntegral: "",
      NroExpedienteInterno: "",
      IdRolAsigna: "",
      Actividad: "",
      EstadoAprobacion: "",
      NombreEstadoAprobacion: "",
      FechaInicio: "",
      FechaAsignacion: "",
      IdSeguimientoFlujo: "",
      IdReferencia: "",
      Asigna: "",
      Aprobar: "",
      Asignar: "",
      Visualizar: "",
      NombreRazon: "",
      area:"Unidad General de Inspección",
      Observacion:"",
      Flujo:"Solicitud de Inspección",
      Porcentaje:0,
      CausaMotivo:" "
    }


  }

  changeClass(){

    $( "#Porcentaje" ).removeClass( "range-disabled" )
  }
 
  ionViewDidLoad() {
  


    const body = JSON.parse(JSON.stringify(this.navParams.get("datapass")));
    this.listUsuario=(body.ListaAprobador && body.ListaAprobador!=null && body.ListaAprobador.length>0 )?body.ListaAprobador:[]

    this.dataService.dataDetailsExpe =body;
    this.dataService.dataDetailsExpe['Flujo']="Solicitud de Inspección"
    this.dataService.dataDetailsExpe['Porcentaje']=body.Porcentaje
    this.dataService.dataDetailsExpe['CausaMotivo']=body.CausaMotivo
    
    
    setTimeout(() => {
      this.changeClass()
    }, 2000);
    
  
  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }
}
