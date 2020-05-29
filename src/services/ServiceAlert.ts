import {
  Injectable
} from "@angular/core";
import {
  AlertController,
  LoadingController
} from "ionic-angular";


@Injectable()
export class ServiceAlert {

    loading;
  constructor(private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {


  }


  presentConfirm(message) {
    let alert = this.alertCtrl.create({
      message: message,
      buttons: [{
        text: 'Aceptar',
        role: 'Cancelar',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    alert.present();
  }

  showLoading() {
    if (!this.loading) {
      this.loading = this.loadingCtrl.create({
        content: 'Espere un momento...'
      });
      this.loading.present();
    }
  }

  dismissLoading() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
  }
  
}
