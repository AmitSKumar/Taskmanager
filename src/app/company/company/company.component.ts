import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor(private http:HttpClient) { }

  companies:any
  ngOnInit() {

    this.http.get("https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/companies").subscribe((company)=>{
      this.companies=company;
    })
  }
}
