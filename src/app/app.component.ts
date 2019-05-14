import { Component, Input } from '@angular/core';

import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-wisestep';
 inputLocation='';
 cardText:string[]=[];
 count=0;
 cardExtra:string[]=[];
  locArray:Array<any>;

 
constructor(public _dataService: DataService) {

  // Access the Data Service's getUsers() method we defined
  this._dataService.getUsers()
      .subscribe(res => this.locArray = res);
}
onenter(){
  if(this.inputLocation!=''){
  if(this.count<2){
  this.cardText.push(this.inputLocation);
  this.inputLocation='';
  this.count+=1;
  console.log(this.count);
  }
  else{
    this.cardExtra.push(this.inputLocation);
    console.log(this.cardExtra);
    this.inputLocation='';
    this.count+=1;
    console.log(this.count);
  }
}
}
}

