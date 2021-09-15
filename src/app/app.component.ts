import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Taskmanager';
  myname:string;
  ngOnInit(){
  this.printMyname("Amit")
}

  printMyname(name){
    this.myname=name
    console.log(this.myname);
  }
}
