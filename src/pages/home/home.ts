import { Component, ViewChild, OnInit } from "@angular/core";
import { Nav, LoadingController, ModalController, Platform } from "ionic-angular";

import {NavController, PopoverController,NavParams} from "ionic-angular";
import {DataService} from '../../services/dataService'

import { LoginPage } from "../login/login";
import { ModalRestPassComponent } from '../modal-rest-pass/modal-rest-pass';
//import { BackgroundMode } from "@ionic-native/background-mode";
//import { Network } from "@ionic-native/network";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DataService]
})

export class HomePage implements OnInit{
  // search condition

  @ViewChild(Nav) nav2: Nav;

  rootPage: any = LoginPage;


  constructor(
              public nav: NavController,
              public popoverCtrl: PopoverController,
              public navParams: NavParams,
              public loadingController: LoadingController,
              public myModal: ModalController,
              private dataService:DataService,
              public platform: Platform,
                          
              ) {
  
  
  }

  
  ngOnInit(){
    this.dataService._dataHome={
      Contrasena:'',
      Usuario:'',
      cambioPass:''
    }

    this.dataService._dataHome.Usuario =this.navParams.get("Usuario");
    this.dataService._dataHome.cambioPass =this.navParams.get("cambioPass");
 
    //this.showModal(this.dataService._dataHome)
     if(this.dataService._dataHome.cambioPass==0)
          this.showModal(this.dataService._dataHome)
       
  }
  


 
  showModal(datafront) {
    var dataMo = {
      datapass: datafront
    };

    var modal = this.myModal.create(ModalRestPassComponent, dataMo);
    modal.present();

  } 
  
 


  logout() {

    localStorage.clear();

    this.nav.push(LoginPage);
    
  }
}

//
