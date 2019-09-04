import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { LoginModel } from '../model/login-model';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})


export class SignInComponent implements OnInit {

  
  token:string;
  loginForm = new FormGroup({
    email : new FormControl(''),
    password: new FormControl('')
  })

  constructor(private authService:AuthService,formBuilder:FormBuilder,private router:Router) { 

    this.loginForm = formBuilder.group({
      'email':[''],
      'password':['']
    })
  }

  ngOnInit() {


  }

  get loginFormData(){
    return this.loginForm.controls;
  }

  userLogin(){
    var loginModel:LoginModel = new LoginModel(this.loginFormData.email.value,this.loginFormData.password.value);
    this.authService.login(loginModel).subscribe(
      data =>{
       console.log(data.token+"i got this..")
       
       this.authService.setToken(data.token);
       this.router.navigate(['main']);
        
      },error =>{
        console.log(error)
      }
    )

  }

}
