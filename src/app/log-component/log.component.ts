import { Component, Input, OnInit } from '@angular/core';
import { KioskService } from '../servicies/kiosk.service';

@Component({
  selector: 'log-component',
  templateUrl: './log.component.html',
})

export class LogComponent {
  @Input() dataToSave: any;

    constructor(
    private kioskService: KioskService
    ){
  }


  displayData(){
    console.log(this.dataToSave,'dataToSave')
    this.kioskService.setlistKiosk(this.dataToSave)
  }

}
