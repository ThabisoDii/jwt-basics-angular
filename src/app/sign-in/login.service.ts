import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../model/login-model';
import * as jwt_decode from 'jwt-decode';


const endpoint = environment.baseUrl;
export const TOKEN_NAME: string = 'jwt_token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(loginMode:LoginModel){
    //if you use any you get an error
    return this.http.post<any>(endpoint+'/public/inbox10/authenticate',loginMode)
  }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0); 
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;

    const date = this.getTokenExpirationDate(token);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }


  /*return this.http.get(endpoint+'/get/user/',httpOptions).subscribe(
    data => {
      console.log(data)
    },

    error =>{
      console.log(error)
    }
    
  )*/

  getUser(token:string){

    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+token
      })
    };

    return this.http.get<any>(endpoint+'/get/user',httpOptions)
  }
}
