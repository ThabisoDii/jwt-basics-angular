import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';//npm install use this to check the token expiry date
import { LoginService } from '../sign-in/login.service';



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  token:string;
  isTokenExpired :boolean;
  expirationDate:Date;
  constructor(private loginService:LoginService) { }

  ngOnInit() {
    this.token = this.loginService.getToken();
    this.expirationDate = this.loginService.getTokenExpirationDate(this.token);
    this.isTokenExpired = this.loginService.isTokenExpired(this.token);
     this.refreshToken(this.token);

  }

  refreshToken(token:string){
    this.loginService.getUser(token).subscribe(
      data =>{
        console.log(data.name +" whats")
      },error =>{
        console.log(error.message +" error")
      }
    );
    

  }

}
