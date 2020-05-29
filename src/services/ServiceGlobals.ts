import {
  Injectable,

} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import {
  Configuration
} from '../ConfigSystems/constants';
import {
  HttpClient,
  HttpHeaders,

} from '@angular/common/http';
import {
  Storage
} from '@ionic/storage';

import * as $ from 'jquery';
import { File } from '@ionic-native/file';
import { ListFiles } from '../Models/ListFiles';
import { InsertActaModel } from '../Models/InsertActaModel';



@Injectable()
export class ServiceGlobals {

  constructor(public http: HttpClient,
    private _url: Configuration,
    private storage: Storage,
    private file: File
  ) {

  }

  private apiUrl = this._url.ServerLocal_Security;
  private api_flujo = this._url.serverLocalFlujo;
  private api_recuperarClaves = this._url.serverCambio;
  private api_profesionales=this._url.profesionales;
  private api_pagos=this._url.pagos




  public GetApi(url, param): any {

    let uriServece = "";
    if (param == 1)
      uriServece = this.api_flujo


    return new Promise((resolve, reject) => {
      this.http.get(uriServece + url, {
          headers: new HttpHeaders().set('XAuthToken', localStorage.getItem('tokenSTS'))

        })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });


  }

  public GetApiCatalogo(url, param): any {

    let uriServece = this.apiUrl;
  


    return new Promise((resolve, reject) => {
      this.http.get(uriServece + url, {
          headers: new HttpHeaders().set('XAuthToken', localStorage.getItem('tokenSTS'))

        })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });


  }


  public login(body)
  {
    let url = this.apiUrl+'iniciosesion'

    return new Promise((resolve, reject) => {
      this.http.post(url, body, {
        headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),

      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

 



  private async readFiles(uri:string,name:string)
  {
    
    let finalUri = uri.substr(0, uri.lastIndexOf('/') + 1);

    return this.file.readAsArrayBuffer(finalUri, name).then(value =>{
      return value;
    }).catch(ex=>{
      return null;
    })
  }

 public async PingServer() {

 try {
     await this.ping();
     return true;
   }
   catch (e) {
     return false;
   }
   
 }

 private async ping()
 {
   return new Promise((resolve, reject) => {
     this.http.get('https://192.168.0.11:45455/api/ping')
       .subscribe(() => {
         resolve(true);
       }, () => {
         reject(false);
       });
   });
 }

  public async UpdateActa(request: InsertActaModel)
  {
    var data = new FormData();
    
    //add actas file
    let actas =  request.rutasActas as ListFiles[];
    for(let i =0; i<= actas.length - 1; i++)
    {
       let arry = await this.readFiles(actas[i].path, actas[i].name);
       if(arry ==null){continue;}
       
      data.append(`filesActas[${i}]`, new Blob([arry]), actas[i].name);
    }

    //add attchment
    let attch = request.rutasAttch as ListFiles[];
    for (let i = 0; i <= attch.length - 1; i++) {
      let arry = await this.readFiles(attch[i].path, attch[i].name);
      if (arry == null) { continue; }

      data.append(`filesAttch[${i}]`, new Blob([arry]), attch[i].name);
    }


    for (var key in request) {
      if (key == 'rutasActas' || key =='rutasAttch') {continue;}
      data.append(`${key}`, request[key]);
    }
  


   return this.http.post('https://192.168.0.11:45455/api/riesgoprofesional/insertarregistroacta2',data,{
      headers: new HttpHeaders().set('enctype', 'multipart/form-data').set('XAuthToken', localStorage.getItem('tokenSTS'))
   }).toPromise();
   
    
 
    
  }



  public PostApiNotToken(url, data, tipo, param): any {


    let urlFinal = ""

    //1 para api de seguridad
    if (param == 1) {
      urlFinal = this.apiUrl
    }
    //2 para api de flujo
    else if (param == 2) {
      urlFinal = this.api_flujo
    }
    //3 para api de recuperacion
    else if (param == 3) {
      urlFinal = this.api_recuperarClaves
    }


    if (tipo == 1) {
      return new Promise((resolve, reject) => {
        this.http.post(urlFinal+ url, data, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),

          })
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    } else {
      return new Promise((resolve, reject) => {
        this.http.post(urlFinal + url, {
            headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),

          })
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }



  }



  public SendData(data, url, type, param): any {


    let urlFinal = ""

    //1 para api de seguridad
    if (param == 1) {
      urlFinal = this.apiUrl
    }
    //2 para api de flujo
    else if (param == 2) {
      urlFinal = this.api_flujo
    }
    //3 para api de recuperacion
    else if (param == 3) {
      urlFinal = this.api_recuperarClaves
    }

    //4 para profesionales
    else if (param == 4) {
      urlFinal = this.api_profesionales
    }

    //5 para pagos
    else if (param == 5) {
      urlFinal = this.api_pagos
    }

    console.log(param)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8',
        'XAuthToken': localStorage.getItem('tokenSTS'),
      })
    };


        /*let  headers= new HttpHeaders();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('XAuthToken', localStorage.getItem('tokenSTS'));
         headers.set('Content-Type', 'application/json; charset=utf-8');
         headers.set('XAuthToken', localStorage.getItem('tokenSTS'));*/

    if (type == 1) {

      return new Promise((resolve, reject) => {
        this.http.post(urlFinal + url, data,httpOptions)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    } else {
      return new Promise((resolve, reject) => {
        this.http.put(urlFinal+ url, data, httpOptions)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }


    /*let  headers= new HttpHeaders();
        headers.append('Content-Type', 'application/json; charset=utf-8');
      //  headers.set('Authorization', 'Bearer '+'my-auth-token');
        //headers.set('Content-Type', 'application/json; charset=utf-8');
       
        return this.http.post(this.apiUrl + url, data, {
            headers:headers
          })
          .map((res) => res);*/
  }

  public SendFile(data, url) {

 
    const httpOptions = {
      headers: new HttpHeaders({
        //'Content-Type':  'application/json; charset=utf-8',
        'XAuthToken': localStorage.getItem('tokenSTS'),
      })
    };
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + url, data,httpOptions)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  parseResponse(data) {

    if (data && data != undefined && data != null)
      return JSON.parse(JSON.stringify(data))
    else
      return JSON.parse(JSON.stringify({
        status: 500
      }))

  }


  closeSesion() {
    //this.storage.set('user', '');
    console.log('close session')
    localStorage.clear();
    this.storage.clear();
  }


  public validationCharacterNumerick() {
    $('body').on('keypress', '.letrasandnum', function (e) {
      var key = e.keyCode || e.which;
      var tecla = String.fromCharCode(key).toLowerCase();
      var letras = " abcdefghijklmnñopqrstuvwxyz1234567890";
      var especiales: any = "8-37-39-46";

      var tecla_especial = false;
      for (var i in especiales) {
        if (key == especiales[i]) {
          tecla_especial = true;
          break;
        }
      }

      if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
      }
      var text = $(this).val();
      text = text.replace(/\s+/gi, ' ');
      $(this).val(text);
    });
  }

  public replaceSpace(text) {

    if(text!='' && text!=null && text!=undefined){
      text=text.trim()
    }
    
    return text
    
  } 

  public validationNumeros() {
    $('body').on('keypress', '.numeros', function (e) {
      var key = e.keyCode || e.which;
      var tecla = String.fromCharCode(key).toLowerCase();
      var letras = " 1234567890%.";
      var especiales: any = "8-37-39-46";

      var tecla_especial = false;
      for (var i in especiales) {
        if (key == especiales[i]) {
          tecla_especial = true;
          break;
        }
      }
      if (letras.indexOf(tecla) == -1 && !tecla_especial ) {
        return false;
      }
      var text = $(this).val();
      text = text.replace(/\s+/gi, ' ');
      $(this).val(text);
    });
  }

}
