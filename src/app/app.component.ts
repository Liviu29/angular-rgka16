import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  selectedCheckbox:any;
  

  ngOnInit(){

  }

  dataSelected(event) {
    this.selectedCheckbox = event
    console.log(this.selectedCheckbox,'selectedCheckbox')

  }
  

}
