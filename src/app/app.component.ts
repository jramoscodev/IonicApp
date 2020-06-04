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
       
       this.timer= setInterval(async ()=>{
          var hasAccess = await this.service.PingServer();
          if(!this.isRunning && hasAccess){
         
            // //if(this.isRunning) return; //salir si ya se esta ejecutando 
            console.log('internet y no se esta ejecutando ')
            this.isRunning = true;
            let data = JSON.parse(localStorage.getItem('background')) as InsertActaModel[];
            let errorData: InsertActaModel[] = new Array<InsertActaModel>();
            console.log(data);
            if (data ==null) { return; }// salimos si no hay nada que procesar
             let count = 0;
             var tmp:any;
            for (let item of data) {
              tmp = item;
              try {
                 await this.service.UpdateActa(item);
  
                 count++;
              } catch (e) { console.error(e); errorData.push(tmp); }
            }//en loop elements
            if(count > 0) {
              //set notification
              this.localNotifications.schedule({
                id: 1,
                text: `Expedientes actualizados ${count}`,
                sound: this.platform.is('android') ? 'file://sound.mp3' : 'file://beep.caf',

              });
             }
          

             // check if array has elements
            errorData.length > 0 ? localStorage.setItem('background', JSON.stringify(errorData)) : localStorage.removeItem('background');
             console.log('setting is running to false')
             this.isRunning = false;

          }//end access to internet


       },3000);

       
      
        
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
   
}
