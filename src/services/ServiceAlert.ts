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

  async showConfirm(titleAlert:any,messageAlert:any) {
    const confirm = this.alertCtrl.create({
      title: titleAlert,
      message: messageAlert,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            return false;
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
           return true;
          }
        }
      ]
    });
     return await confirm.present();
  }
  
}
