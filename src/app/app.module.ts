import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler,IonicPageModule } from 'ionic-angular';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {HttpClientModule} from '@angular/common/http';
import { CallNumber } from '@ionic-native/call-number/ngx';


import { MyApp } from './app.component';
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {RecuperarCredencialesPage} from "../pages/RecuperarCredenciales/RecuperarCredenciales";
import {ConsultaExpedienteComponent} from '../pages/ConsultaExpediente/ConsultaExpediente'
import {RegistrarExpedienteComponent} from '../pages/RegistrarExpediente/RegistrarExpediente'
import {Configuration} from '../ConfigSystems/constants'
import {ModalDetailsComponent} from '../pages/modal-details/modal-details';
import {ConsultaExpedienteExtComponent} from '../pages/ConsultaExpedienteExt/ConsultaExpedienteExt'
import {ModalRegistrarComponent} from '../pages/modal-registrar/modal-registrar'
import { ModalRestPassComponent } from '../pages/modal-rest-pass/modal-rest-pass';
import { IonicStorageModule } from '@ionic/storage';
import {ModalFormaPagoComponent} from '../pages/modal-forma-pago/modal-forma-pago'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { from } from 'rxjs/observable/from';
import { Camera } from '@ionic-native/camera';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ImagePicker } from '@ionic-native/image-picker';
import { FilePath } from '@ionic-native/file-path';
import {Chooser} from '@ionic-native/chooser';
import { BackgroundMode } from '@ionic-native/background-mode';
import { Network } from '@ionic-native/network';
import { BackgroundTask } from '../services/BackgroundTask';
import { NetworkInterface } from '@ionic-native/network-interface';
import { File } from '@ionic-native/file';
import { LocalNotifications } from '@ionic-native/local-notifications';


@NgModule({
  declarations: [
    MyApp,    
    HomePage,
    LoginPage,
    RecuperarCredencialesPage,
    ConsultaExpedienteComponent,
    ConsultaExpedienteExtComponent,
    RegistrarExpedienteComponent,
    ModalDetailsComponent,
    ModalRegistrarComponent,
    ModalRestPassComponent,
    ModalFormaPagoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule, 
    IonicModule.forRoot(MyApp,
      {
        scrollPadding: false, 
        scrollAssist: true,
        autoFocusAssist: false
      }),
      RoundProgressModule,
      IonicPageModule.forChild(ModalDetailsComponent),
      IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    LoginPage,
    RecuperarCredencialesPage,
    ConsultaExpedienteComponent,
    ConsultaExpedienteExtComponent,
    RegistrarExpedienteComponent,
    ModalRegistrarComponent,
    ModalRestPassComponent,
    ModalFormaPagoComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Configuration,
    CallNumber,
    Camera,
    WebView,
    ImagePicker,
    FilePath,
    Chooser,
    BackgroundMode,
    Network,
    NetworkInterface,
    BackgroundTask,
    File,
    LocalNotifications
  ]
})
export class AppModule {}
