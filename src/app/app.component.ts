import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse ,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
const endpoint = environment.baseUrl;

var token = " Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxZGlwaGFyZWplcnJ5QGdtYWlsLmNvbSIsImV4cCI6MTU2NzM0Nzk5NCwiaWF0IjoxNTY3MzQ0OTk0fQ.Armq_if23K6ygEG37G947uI9HV8GBx-Jo6-C5WpmUs_4pgfalr-kLql3Qg-eyNmbefRH9LAEq3Or_3u4HgA_YQ";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': token
  })
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  constructor(private http:HttpClient) { }

  
  
  ngOnInit() {
    


    return this.http.get(endpoint+'/get/user/',httpOptions).subscribe(
      data => {
        console.log(data)
      },

      error =>{
        console.log(error)
      }
      
    )
  }
  }

 




