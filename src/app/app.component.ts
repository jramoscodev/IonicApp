import {
  Component,
  ViewChild
} from '@angular/core';

import {
  Platform,
  MenuController,
  Nav,
  Events
} from 'ionic-angular';

import {
  HomePage
} from "../pages/home/home";
import {
  LoginPage
} from "../pages/login/login";
import {
  ConsultaExpedienteComponent
} from '../pages/ConsultaExpediente/ConsultaExpediente'
import {
  ConsultaExpedienteExtComponent
} from '../pages/ConsultaExpedienteExt/ConsultaExpedienteExt'
import {
  RegistrarExpedienteComponent
} from '../pages/RegistrarExpediente/RegistrarExpediente'

import {
  StatusBar
} from '@ionic-native/status-bar';
import {
  SplashScreen
} from '@ionic-native/splash-screen';
import { InsertActaModel } from '../Models/InsertActaModel';
import { ServiceGlobals } from '../services/ServiceGlobals';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ExpedientesErroresPage } from '../pages/expedientes-errores/expedientes-errores';


declare var cordova:any;
//declare var navigator: any;

@Component({
  templateUrl: 'app.html',
  providers: [ServiceGlobals]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
//  delay:any = ms => new Promise(res => setTimeout(res, ms));
 
  rootPage: any = LoginPage;
  timer:any;
  isRunning:boolean = false;
  pages: Array < { 
    title: string,
    component: any,
    icon: String
  } > ;
  hasErro:any;
  countNotifications:any = 0;
  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private events: Events,
    private service: ServiceGlobals,
    private localNotifications: LocalNotifications) {
   
    this.initializeApp();
    
    // set our app's pages
   

    //Escucha el evento que se genera desde el login y carga el menu segun sea el pefil

    this.events.subscribe('user:0', () => {
      this.pages = [{
          title: 'Inicio',
          component: HomePage,
          icon: 'home'
        },
        {
          title: 'Consulta Expediente',
          component: ConsultaExpedienteExtComponent,
          icon: 'ios-search-outline'
        }
        ,
        {
          title: 'Registrar Info. Expedientes',
          component: RegistrarExpedienteComponent,
          icon: 'ios-add-circle-outline'
        },
        {
          title:'Errores',
          component: ExpedientesErroresPage,
          icon:'ios-warning-outline'
        },
      ]
    })
    this.events.subscribe('user:1', () => {
      this.pages = [{
        title: 'Inicio',
        component: HomePage,
        icon: 'home'
      },
      {
        title: 'Consulta  Expedientes Ext.',
        component: ConsultaExpedienteComponent,
        icon: 'ios-search-outline'
      }
      
      
      ]
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // watch network for a connection
      
      this.platform.pause.subscribe( async ()=>{
        console.log('bk proccess')
        cordova.plugins.backgroundMode.setDefaults({ silent: true });
        cordova.plugins.backgroundMode.on('activate', function () {
          cordova.plugins.backgroundMode.disableWebViewOptimizations();
        });
        cordova.plugins.backgroundMode.enable();
       
       this.timer= setInterval(async ()=>{
        
        if(this.isRunning){ return;} //prevent made ping

         var hasAccess = await this.service.PingServer();
         console.log('internet access', hasAccess);
         console.log(`is run? ${this.isRunning}, has access to internet? ${hasAccess}`);
         if(this.isRunning == false && hasAccess == true) { //entra a procesar
          try{
            this.isRunning = true;
            //get data from localStorage
            let data = JSON.parse(localStorage.getItem('background')) as InsertActaModel[];
            //set error object
            let errorData: InsertActaModel[] = new Array<InsertActaModel>();
            console.log('data en local storage', data);
            if(data == null){this.isRunning =false;  return};
            let tmp = new InsertActaModel;
            for (let item of data) {
              tmp = item;
              try {
                console.log('bk task', item)
                await this.service.UpdateActa(item);
                console.log('peticion hecha')
                this.sendNotification(`Acta ${item.NroExpedienteInterno}`, 'Exitosa');
              } catch (e) {
                console.error(e);
                if (e['error'] == undefined || e['error'] == null) {
                  tmp.hasError = 'Error al transmitir datos, consulte sitio web para más información';
                } else {
                  if (e.error['Message'] == undefined || e.error['Message'] == null)
                    tmp.hasError = 'Error al transmitir datos, consulte sitio web para más información';
                  else
                    tmp.hasError = e.error.Message;
                }
                
                this.sendNotification(`Acta ${item.NroExpedienteInterno}`, tmp.hasError);
                errorData.push(tmp);
              }
            }//end loop elements
            localStorage.removeItem('background');
            if (errorData.length > 0) {
              let newsErrors = this.setErrorBackground(errorData);
              localStorage.setItem('errorProcess', JSON.stringify(newsErrors));
            }
            console.log('setting is running to false');
            this.isRunning = false;
          }catch(ex){
            this.isRunning = false;
            console.error(ex);
          }
         }
       }, 39000);     
        
      },err=>{ console.error('error',err); })
    });//end pause app


    this.platform.resume.subscribe(() =>{
     clearInterval(this.timer)
    }, err => { console.error(err) })

  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
   
  private sendNotification(titulo:any, message:any){
    //set notification
    this.countNotifications++;
    this.localNotifications.schedule({
      id: this.countNotifications,
      text: message,
      sound: this.platform.is('android') ? 'file://sound.mp3' : 'file://beep.caf',
      title: titulo
    });
  }

  private setErrorBackground(newErrors: InsertActaModel[]){
    let errors = JSON.parse(localStorage.getItem('errorProcess')) as InsertActaModel[];
    if(errors==null) return newErrors;

    newErrors.forEach(function(item){
      errors.push(item);
    })
    return errors;
  }
}
