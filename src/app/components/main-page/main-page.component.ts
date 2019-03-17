import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthModel } from '../../Models/AuthModel';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  id: string;
  constructor(private httpservice: HttpClient) { }

  ngOnInit() {
  }

  Validate(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8',
        'Authorization': 'my-auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };
    this.httpservice.post("http://localhost:60013/api/account/",this.id, httpOptions).subscribe(
      (res :AuthModel)=>{
        console.log(res);  
      
      },
      err=>{
        console.log(err);
      }
    )
  }
}

