import {Injectable} from '@angular/core';
import { ServiceGlobals } from './ServiceGlobals';
import { LoginResult } from '../Models/LoginResult';


@Injectable()
export class AuthenticationService {

    constructor(private goblal: ServiceGlobals){

    }

    async logIn(json: string)
    {
      let result = new LoginResult()
      return  this.goblal.login(json).then(data=>{
          localStorage.setItem('tokenSTS', data['Data'].Token);
          localStorage.setItem('typouser', data['Data'].IdPatrono)
         
          result.data = { typo: data['Data'].IdPatrono, changedPass: data['Data'].ChangedPass };

          return result;
        },e=>{
            result.error = e.error;
            return result;
        });
    }

    logOut()
    {
      localStorage.clear();
    }

    IsAuthenticated()
    {
        
      return localStorage.getItem('tokenSTS') !== null ? true : false;
    }

}