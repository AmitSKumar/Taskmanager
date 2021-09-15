import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }
users:any
  ngOnInit() {

    this.http.get("https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/users").subscribe((user)=>{
      this.users=user;
    })
  }

}
